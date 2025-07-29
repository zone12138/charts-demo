import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  nextTick,
  onMounted,
  shallowRef,
  toRefs,
  Vue2,
  watch,
} from "vue-demi";
import { init as initChart, throttle } from "echarts/core";

import { isOn, omitOn } from "@/utils/index";
import defaultConfig from "@/config/index";

const NATIVE_EVENT_RE = /(^&?~?!?)native:/;
const TAG_NAME = "dfe-echarts";

export default defineComponent({
  name: "DFECharts",
  props: {
    type: String,
    option: Object,
    dataset: Object,
    autoresize: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { attrs }) {
    const { autoresize, option, dataset } = toRefs(props);
    // container
    const root = shallowRef();
    // echarts实例
    const chart = shallowRef();
    // const defaultOption = xx[xxxx]
    const nonEventAttrs = computed(() => omitOn(attrs));
    // 注册到container中（而不是echarts实例）的事件
    const nativeListeners = {};
    // 注册到echarts实例中的事件
    const realListeners = {};
    const listeners = getCurrentInstance().proxy.$listeners;

    const watchDeep = { deep: true };

    // 监听resize
    watch(
      [root, chart, autoresize],
      ([root, chart, autoresize], _, onCleanup) => {
        let resizeObserver;
        if (root && chart && autoresize) {
          const { offsetWidth, offsetHeight } = root;
          let initialResizeTriggered = false;
          const callback = () => {
            chart.resize();
          };
          const resizeCallback = throttle(callback, 100);
          resizeObserver = new ResizeObserver(() => {
            if (!initialResizeTriggered) {
              initialResizeTriggered = true;
              if (
                root.offsetWidth === offsetWidth &&
                root.offsetHeight === offsetHeight
              )
                return;
            }
            if (root.offsetWidth === 0 || root.offsetHeight === 0) return;

            resizeCallback();
          });
          resizeObserver.observe(root);
        }

        onCleanup(() => {
          if (resizeObserver) {
            resizeObserver.disconnect();
            resizeObserver = null;
          }
        });
      }
    );
    // 监听option配置变化
    watch(
      option,
      (newVal) => {
        if (newVal) {
          if (!("dataset" in newVal)) {
            newVal = { ...newVal, dataset };
          }
          setOption(newVal);
        }
      },
      watchDeep
    );
    // 监听dataset数据变化
    watch(
      dataset,
      (newVal) => {
        if (newVal) {
          setOption({ ...option, dataset: newVal });
        }
      },
      watchDeep
    );

    if (!listeners) {
      // vue3
      Object.keys(attrs)
        .filter((key) => isOn(key))
        .forEach((key) => {
          // eg: onClick => c + lick => click
          let event = key.charAt(2).toLowerCase() + key.slice(3);

          if (event.indexOf("native:") === 0) {
            // eg: native:click => onClick
            const nativeKey = `on${event.charAt(7).toUpperCase()}${event.slice(
              8
            )}`;
            nativeListeners[nativeKey] = attrs(key);
            return;
          }

          if (event.substring(event.length - 4) === "Once") {
            event = `~${event.substring(0, event.length - 4)}`;
          }

          realListeners[event] = attrs[key];
        });
    } else {
      // vue2
      Object.keys(listeners).forEach((key) => {
        if (NATIVE_EVENT_RE.test(key)) {
          nativeListeners[key.replace(NATIVE_EVENT_RE, "$1")] = listeners[key];
        } else {
          realListeners[key] = listeners[key];
        }
      });
    }

    // 初始化
    function init(option) {
      if (!root.value) {
        return;
      }
      const instance = (chart.value = initChart(root.value));

      // 注册事件
      Object.keys(realListeners).forEach((key) => {
        let handler = realListeners[key];
        if (!handler) return;

        let event = key.toLowerCase();

        if (event.charAt(0) === "~") {
          event = event.substring(1);
          handler.__once__ = true;
        }

        let target = instance;
        if (event.indexOf("zr:") === 0) {
          // 通过 getZr() 获取到 ZRender 实例后，可以绑定/解绑底层的原生事件（如 zr:click），实现更底层的交互控制。
          target = instance.getZr();
          event = event.substring(3);
        }

        if (handler.__once__) {
          delete handler.__once__;

          const raw = handler;

          handler = (...args) => {
            raw(...args);
            target.off(event, handler);
          };
        }
      });

      // 调整画布尺寸
      function resize() {
        if (instance && !instance.isDisposed()) {
          instance.resize();
        }
      }

      // 绘制
      function draw() {
        const opt = option || props.option;
        if (opt) {
          instance.setOption(opt);
        }
      }

      if (autoresize.value) {
        nextTick(() => {
          resize();
          draw();
        });
      } else {
        draw();
      }
    }

    // 设置图表参数
    function setOption(option, opts) {
      if (!chart.value) {
        init(option);
      } else {
        chart.value.setOption(option, opts || {});
      }
    }

    onMounted(() => {
      const config = defaultConfig[props.type];
      let opt;
      if (config) {
        const { option, dataset } = config;
        opt = { ...option, dataset };
      }
      init(opt);
    });

    return {
      setOption,
      chart,
      root,
    };
  },
  render() {
    const attrs = Vue2
      ? { attrs: this.nonEventAttrs, on: this.nativeListeners }
      : { ...this.nonEventAttrs, ...this.nativeListeners };
    attrs.ref = "root";
    return h(TAG_NAME, attrs);
  },
});
