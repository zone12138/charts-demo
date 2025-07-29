import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_mult, dataset_mult_less as dataset } from "@/data/index";

const theme = "light";
const type = "line";
const isMult = true;

const tooltip = com.getCommonLineTooltip();
const legend = com.getCommonLineLegend();
const grid = com.getCommonGrid();

export default {
  "l_mult_Xstripe--l": {
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
          ...com.splitLineShow("#ECECEC"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            smooth: true,
            ...com.getCommonLineSymbol4Light,
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "折线图多数据浅底(X轴斑马纹)",
  },
  "l_mult_com--l": {
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
          ...com.getCommonGrid(),
          top: "12%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
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
              color: "#ECECEC",
            },
          },
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            smooth: true,
            ...com.getCommonLineSymbol4Light,
            areaStyle: {},
          },
        ],
      };
    },
    type,
    dataset: dataset_mult,
    theme,
    isMult,
    desc: "折线图多数据浅底(普通)",
  },
  "l_mult_com2--l": {
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
          ...com.getCommonGrid(),
          top: "12%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
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
              color: "#ECECEC",
            },
          },
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            ...com.getCommonLineSymbol4Light,
            areaStyle: {},
          },
        ],
      };
    },
    type,
    dataset: dataset_mult,
    theme,
    isMult,
    desc: "折线图多数据浅底(普通2)",
  },
};
