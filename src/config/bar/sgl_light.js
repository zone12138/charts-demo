import { transformColorAlpha } from "@/utils/color";
import * as com from "../common";
import { Log } from "@/utils";
import { isEmpty } from "lodash-es";

const theme = "light";
const type = "bar";
const dataset = [
  ["", "营业额"],
  ["星期一", 2500],
  ["星期二", 8000],
  ["星期三", 1000],
  ["星期四", 5000],
  ["星期五", 7000],
  ["星期六", 6000],
  ["星期日", 3000],
];
const needCalcMax = true;
const tooltip = com.getCommonBarTooltip();
const grid = com.getCommonGrid();

export default {
  "b_sgl_hill--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = [
          com.getCommonLinearT2B(
            "#0060FF",
            transformColorAlpha("#C1DCFF", 0.38)
          ),
          "#FFAD65",
        ];
      }
      const [usedColor, tipColor = "#FFAD65"] = color;
      return {
        tooltip,
        grid: {
          ...grid,
          top: "20%",
        },
        xAxis: {
          type: "category",
          ...com.axisLineHide,
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color: [usedColor],
        series: [
          {
            type: "pictorialBar",
            barCategoryGap: "-50%",
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              borderWidth: 1,
            },
          },
          {
            type: "scatter",
            symbol: "circle",
            symbolSize: 5,
            ...com.itemNoneEvent,
            encode: { y: 1 },
            itemStyle: {
              color: tipColor,
            },
          },
          {
            type: "scatter",
            symbol: "circle",
            symbolSize: 10,
            ...com.itemNoneEvent,
            encode: { y: 1 },
            itemStyle: {
              color: transformColorAlpha(tipColor, 0.5),
            },
          },
          {
            type: "scatter",
            symbol: "pin",
            symbolSize: (value) => {
              const len = String(value[1] ?? 0).length
              return 13 * len
            },
            ...com.itemNoneEvent,
            encode: { y: 1 },
            itemStyle: {
              color: tipColor,
            },
            label: {
              show: true,
              color: "#FFFFFF",
              position: "inside",
            },
          },
        ],
      };
    },
    type,
    theme,
    dataset,
    desc: "柱状图单色浅底(峰状)",
  },
  "b_sgl_prog--l": {
    option: (color) => {
      if (!Array.isArray(color) || color.length < 2) {
        Log.warning(
          "传递颜色值不是数组或者数组长度小于2，将忽略传递值，使用默认的颜色"
        );
        color = ["#349bff", "#e8eaeb"];
      }
      return {
        tooltip,
        grid,
        xAxis: {
          type: "category",
          ...com.axisLineHide,
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "pictorialBar",
            symbolRepeat: "fixed",
            symbolMargin: "15%",
            barWidth: "25%",
            symbol: "rect",
            symbolClip: true,
            symbolSize: ["100%", "50%"],
            symbolPosition: "start",
          },
          {
            type: "pictorialBar",
            symbolRepeat: "fixed",
            symbolMargin: "15%",
            barWidth: "25%",
            symbol: "rect",
            symbolClip: true,
            symbolSize: ["100%", "50%"],
            symbolPosition: "start",
            ...com.itemNoneEvent,
            z: 1,
          },
        ],
      };
    },
    type,
    theme,
    dataset,
    desc: "柱状图单色浅底(进度条)",
    needCalcMax,
  },
};
