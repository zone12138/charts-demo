import { cloneDeep } from "lodash-es";
import { Log } from "@/utils/index";
import { getCommonLinearT2B4Line as linear } from "@/config/common";
const TYPE_LIQUIDFILL = "liquidFill";
const TYPE_PIE = "pie";
const TYPE_LINE = "line";
const TYPE_BAR = "bar";
const TYPE_LINE_DASHED = "${虚线}"

/**
 * 对option进行排序
 * @param {object} config 配置项
 * @param {Array} color 颜色数组
 * @param {Array<Array>} dataset 数据集
 * @returns {object} 排序后的配置项
 */
export function useSortOpts(config, color, dataset = [[]]) {
  dataset = cloneDeep(dataset);
  try {
    let { option, needCalcMax, type, isMult } = config;
    if (typeof option === "function") {
      option = option(color);

      // 特殊处理折线图和柱状图（因为柱状图和折线图会存在多组数据的情况，即多series的情况）
      if ((type === TYPE_LINE || type === TYPE_BAR) && isMult) {
        let len = dataset[0]?.length;
        const initialSeries = option.series;
        const initialSeriesLen = initialSeries.length;
        // 当数据集长度大于初始series长度+1（因为第一列是x轴的数据，所以要加1）时，即多组数据时，需要复制series（一般都是柱状图和折线图）
        while (len > initialSeriesLen + 1) {
          option.series = [...option.series, ...cloneDeep(initialSeries)];
          len -= initialSeriesLen;
        }
        // 排序（主要用于堆叠，相同的stack将按顺序排列）
        const hasStack = option.series.some((item) => "stack" in item);
        if (hasStack) {
          option.series = option.series.sort((a, b) => {
            return String(a.stack).localeCompare(String(b.stack));
          });
        }
      }

      // 特殊处理折线图（折线图使用areaStyle时，颜色具有规律性）
      if (type === TYPE_LINE) {
        const nameList = dataset[0]?.slice(1);
        option.series = option.series.map((item, index) => {
          if ("areaStyle" in item) {
            const color = option.color[index] ?? "#ff0000";
            item.areaStyle.color = linear(color);
          }
          if (nameList?.[index]) {
            // 根据系列名是否以"${虚线}"开头处理虚线
            if (String(nameList[index]).startsWith(TYPE_LINE_DASHED)) {
              dataset[0][index + 1] = String(nameList[index]).replace(
                TYPE_LINE_DASHED,
                ""
              );
              if (!("lineStyle" in item)) item.lineStyle = {};
              item.lineStyle.type = "dashed";
            }
          }
          return item;
        });
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
          Log.warning(
            "数据集最大值不是有限数",
            "总数据：",
            list,
            "最大值：",
            max
          );
          return;
        }
        dataset.forEach((item, index) => {
          const len = item.length;
          item[len] = index === 0 ? "" : max;
        });
      }
    }

    return { ...option, dataset: { source: dataset } };
  } catch (error) {
    Log.error("useSortOpts error", error.message);
    return {
      title: {
        text: "出错啦！！！",
        subtext: error.message,
        textStyle: { color: "#f00" },
        left: "center",
        top: "center",
      },
    };
  }
}
