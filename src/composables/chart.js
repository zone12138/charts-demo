import { getCurrentInstance, shallowRef, computed, nextTick } from "vue-demi";
import { init as initChart } from "echarts/core";
import { isOn, omitOn } from "../utils";
const NATIVE_EVENT_RE = /(^&?~?!?)native:/;

export function useChart(props, attrs) {
  // 容器DOM
  const root = shallowRef();
  // echarts实例
  const chart = shallowRef();
  // 非事件属性
  const nonEventAttrs = computed(() => omitOn(attrs));
  // 注册到容器DOM中（而不是echarts实例）的事件
  const nativeListeners = {};
  // 注册到echarts实例中的事件
  const realListeners = {};
  const listeners = getCurrentInstance().proxy.$listeners;

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

    if (props.autoresize) {
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
    console.log("setOption", option);
    if (!chart.value) {
      init(option);
    } else {
      // 数量发生变化时，需要手动触发clear，否则会导致残留上一次的图表
      // eg：
      // 上一次图表数据：[1]
      // 下一次图表数据：[1, 2]
      // 不触发clear，会导致残留上一次的图表数据[1, 1]
      chart.value.clear();
      nextTick(() => {
        chart.value.setOption(option, opts || {});
      });
    }
  }

  return {
    root,
    chart,
    nonEventAttrs,
    nativeListeners,
    realListeners,
    setOption,
    init,
  };
}
