import * as com from "../common";

const theme = "light";
const dataset = {
  source: [
    ["", "营业额", ""],
    ["星期一", 2500, 8000],
    ["星期二", 8000, 8000],
    ["星期三", 3000, 8000],
    ["星期四", 3000, 8000],
    ["星期五", 3000, 8000],
    ["星期六", 3000, 8000],
    ["星期日", 3000, 8000],
  ],
};

export default {
  "b_sgl_progress--light": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip(),
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      grid: com.getCommonGrid(),
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      color: ["rgb(52,155,255)", "rgb(232, 234, 235)"],
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
          tooltip: { show: false },
          emphasis: { disabled: true },
          z: 1,
        },
      ],
    },
    theme,
    dataset,
    desc: "柱状图单色浅底(进度条)",
  },
  "b_sgl--light": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip(),
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      grid: com.getCommonGrid(),
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      color: ["rgb(52,155,255)", "rgb(232, 234, 235)"],
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
          tooltip: { show: false },
          emphasis: { disabled: true },
          z: 1,
        },
      ],
    },
    theme,
    dataset,
    desc: "柱状图单色浅底(普通)",
  },
};
