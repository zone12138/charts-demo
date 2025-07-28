import { isEmpty } from "lodash-es";
import * as com from "../common";

const theme = "light"; // 主题（dark/light）
const type = "bar"; // 图表类型（bar/line/pie/liquidFill）
const isMult = true; // 是否多数据（主要用在柱状图和折线图）
const dataset_less = [
  ["营业额", "零食", "饮料"],
  ["星期一", 2500, 1000],
  ["星期二", 8000, 1000],
  ["星期三", 3000, 1000],
  ["星期四", 4000, 1000],
  ["星期五", 1000, 1000],
  ["星期六", 5000, 1000],
  ["星期日", 7000, 1000],
];
const dataset = [
  ["营业额", "零食", "饮料", "水果生鲜", "日常用品"],
  ["星期一", 2500, 1000, 3000, 2600],
  ["星期二", 8000, 1000, 3000, 2600],
  ["星期三", 3000, 1000, 3000, 2600],
  ["星期四", 4000, 1000, 3000, 2600],
  ["星期五", 1000, 1000, 3000, 2600],
  ["星期六", 5000, 1000, 3000, 2600],
  ["星期日", 7000, 1000, 3000, 2600],
];
const tooltip = com.getCommonBarTooltip();
const legend = com.getCommonBarLegend();
const grid = com.getCommonGrid();

export default {
  "b_mult_com--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = [
          com.getCommonLinearT2B("#649AFF", "#8BB3FF"),
          com.getCommonLinearT2B("#F6B17C", "#FFDEC5"),
        ];
      }
      return {
        tooltip,
        legend,
        grid,
        xAxis: {
          type: "category",
          ...com.axisLineHide,
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisTickHide,
          ...com.axisLineHide,
        },
        color,
        series: [
          {
            type: "bar",
            barMaxWidth: "25%",
            itemStyle: {
              decal: {
                symbol: "roundRect",
              },
            },
          },
        ],
      };
    },
    type,
    theme,
    dataset: dataset_less,
    isMult,
    desc: "柱状图多数据浅底(普通)",
  },
  "b_mult_stack--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = [
          com.getCommonLinearT2B("#649AFF", "#8BB3FF"),
          com.getCommonLinearT2B("#F6B17C", "#FFDEC5"),
        ];
      }
      return {
        tooltip,
        legend,
        grid,
        xAxis: {
          type: "category",
          ...com.axisLineHide,
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisTickHide,
          ...com.axisLineHide,
        },
        color,
        series: [
          {
            type: "bar",
            barMaxWidth: "25%",
            stack: "stack",
          },
        ],
      };
    },
    type,
    theme,
    dataset: dataset_less,
    isMult,
    desc: "柱状图多数据浅底(堆叠)",
  },
};
