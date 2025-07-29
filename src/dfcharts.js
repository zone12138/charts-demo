import {
  defineComponent,
  h,
  onMounted,
  toRefs,
  Vue2,
  watch,
  toRaw,
} from "vue-demi";
import { useAutoResize } from "./composables/autoResize";
import { useChart } from "./composables/chart";
import { useSortOpts } from "./composables/sortOpts";
import allConfigs from "@/config/index";
import { isEmpty } from "lodash-es";
import { Log } from "@/utils/index";

const TAG_NAME = "df-echarts";

export default defineComponent({
  name: "DFCharts",
  props: {
    type: String,
    option: Object,
    dataset: Object,
    colorList: Array,
    autoresize: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { attrs }) {
    const { autoresize, option, dataset, colorList } = toRefs(props);
    const { root, chart, nonEventAttrs, nativeListeners, setOption, init } = useChart(props, attrs);
    useAutoResize(root, chart, autoresize);
    
    const watchDeep = { deep: true };
    // 监听option配置变化
    watch(
      option,
      (newVal) => {
        if (!isEmpty(props.type)) {
          Log.warning("使用type属性时，option属性将失效");
          return;
        }
        setOption(newVal);
      },
      watchDeep
    );
    // 监听dataset和colorList数据变化
    watch(
      [dataset, colorList],
      ([newdataset, newcolorList]) => {
        if (isEmpty(props.type)) {
          Log.warning("未使用type属性时，dataset和colorList属性将失效");
          return;
        }
        setOption(useSortOpts(defaultConfig, toRaw(newcolorList), toRaw(newdataset) ?? defaultConfig.dataset));
      },
      watchDeep
    );

    let defaultConfig;
    onMounted(() => {
      let opt = option.value;
      if (props.type) {
        const config = allConfigs[props.type];
        if (config) {
          const { dataset } = config;
          defaultConfig = config;
          opt = useSortOpts(defaultConfig, props.colorList, props.dataset ?? dataset);
        } else {
          Log.info(`未找到type为${props.type}的配置，将使用props.option配置`);
        }
      }

      if (isEmpty(opt)) {
        Log.warning("option配置为空，无法初始化图表");
        return;
      }

      console.log("opt", opt);
      init(opt);
    });

    return {
      setOption,
      chart,
      root,
      nonEventAttrs,
      nativeListeners,
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
