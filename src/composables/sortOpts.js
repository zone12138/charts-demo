import { isEmpty } from "lodash-es";
import { Log } from "../utils";
const TYPE_LIQUIDFILL = "liquidFill";
const TYPE_PIE = "pie";
const TYPE_LINE = "line";
const TYPE_BAR = "bar";

/**
 * 对option进行排序
 * @param {object} config 配置项
 * @param {Array} color 颜色数组
 * @param {Array<Array>} dataset 数据集
 * @returns {object} 排序后的配置项
 */
export function useSortOpts(config, color, dataset = [[]]) {
  try {
    let { option, needCalcMax, needCalcTotal, type, isMult } = config;
    if (typeof option === "function") {
      option = option(color);

      // 特殊处理折线图和柱状图（因为柱状图和折线图会存在多组数据的情况，即多series的情况）
      if ((type === TYPE_LINE || type === TYPE_BAR) && isMult) {
        let len = dataset[0]?.length;
        const initialSeries = [...option.series];
        // 当数据集长度大于2时，即多组数据时，需要复制series（一般都是柱状图和折线图）
        while (len > 2) {
          option.series = [...option.series, ...initialSeries];
          len--;
        }
      }

      // 特殊处理水球图（因为水球图是非官方的，data是直接设置在series上的，无法使用dataset属性进行映射）
      if (type === TYPE_LIQUIDFILL) {
        const index = option.series.findIndex(
          (item) => item.type === TYPE_LIQUIDFILL
        );
        if (index !== -1) {
          // 额外处理了水球图的data，即可以是 [[0.9, 0.9, 0.9]]（为了保证格式统一）也可以是 [0.9, 0.9, 0.9]（为了省事）-- 不强制
          option.series[index].data = Array.isArray(dataset[0])
            ? dataset[0]
            : dataset;
        }
      }

      // 计算最大值（用于特殊处理背景）
      if (needCalcMax) {
        let len = dataset?.length;
        const list = [];
        while (len >= 2) {
          list.push(...(dataset[len - 1]?.slice(1) ?? []));
          len--;
        }
        const max = Math.max(...list);
        if (!Number.isFinite(max)) {
          Log.warning("数据集最大值不是有限数", "总数据：", list, "最大值：", max);
          return;
        }
        dataset.forEach((item, index) => {
          const len = item.length;
          item[len] = index === 0 ? '' : max;
        });
      }

      // 计算总和（用作另一侧的Y轴的显示值）
      if (!isEmpty(needCalcTotal)) {
        console.log("needCalcTotal", needCalcTotal);
      }
    }

    return { ...option, dataset: { source: dataset } };
  } catch (error) {
    Log.error("useSortOpts error", error.message);
  }
}
