import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_mult_less as dataset, dataset_mult } from "@/data/index";

const theme = "dark";
const type = "line";
const isMult = true;

const tooltip = com.getCommonLineTooltip("d");
const legend = com.getCommonLineLegend("d");
const grid = com.getCommonGrid();

export default {
  "l_mult_com--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = [
          "#95D202",
          "#7789FF",
          "#00D48F",
          "#FF77B6",
          "#1EB6FF",
          "#FF8629",
          "#FFC337",
        ];
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          top: "12%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#D3DBE2",
            margin: 12,
          },
          ...com.splitLineHide,
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#D3DBE2"),
          ...com.splitLineShow("#2D4563"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            smooth: true,
            ...com.getCommonLineSymbol,
            areaStyle: {},
          },
        ],
      };
    },
    type,
    dataset: dataset_mult,
    theme,
    isMult,
    desc: "折线图多数据深底(普通)",
  },
  "l_mult_Xstripe--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = ["#02C4D2", "#FF8629"];
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          top: "12%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#D3DBE2",
            margin: 12,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["#63C9F616", "transparent"],
            },
          },
          ...com.splitLineHide,
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#D3DBE2"),
          ...com.splitLineShow("#376E8F"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            smooth: true,
            ...com.getCommonLineSymbol,
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "折线图多数据深底(X轴斑马纹)",
  },
  "l_mult_com2--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = [
          "#95D202",
          "#7789FF",
          "#00D48F",
          "#FF77B6",
          "#1EB6FF",
          "#FF8629",
          "#FFC337",
        ];
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          top: "12%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#D3DBE2",
            margin: 12,
          },
          ...com.splitLineHide,
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: "#313D4D",
              type: [3, 3],
            },
          },
          ...com.axisLabelShow("#D3DBE2"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            ...com.getCommonLineSymbol,
            areaStyle: {},
          },
        ],
      };
    },
    type,
    dataset: dataset_mult,
    theme,
    isMult,
    desc: "折线图多数据深底(普通2)",
  },
};
