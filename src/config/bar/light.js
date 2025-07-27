import * as com from "../common";
import { Log } from "@/utils";

const theme = "light";
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
const type = "bar";
const needCalcMax = true;

export default {
  "b_sgl_prog--l": {
    option: (color) => {
      if (!Array.isArray(color) || color.length !== 2) {
        Log.warning(
          "传递颜色值不是数组或者数组长度小于2，将忽略传递值，使用默认的颜色"
        );
        color = ["#349bff", "#e8eaeb"];
      }
      return {
        backgroundColor: "transparent",
        tooltip: com.getCommonBarTooltip(),
        xAxis: {
          type: "category",
          ...com.axisLineHide,
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        grid: com.getCommonGrid(),
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
