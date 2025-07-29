import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_mult_less as dataset_less } from "@/data/index";

const theme = "light"; // 主题（dark/light）
const type = "bar"; // 图表类型（bar/line/pie/liquidFill）
const isMult = true; // 是否多数据（主要用在柱状图和折线图）

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
