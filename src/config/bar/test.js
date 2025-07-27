import * as com from "../common";
const dataset = [
  ["日期", "营业额"],
  ["星期一", 2500],
  ["星期二", 8000],
  ["星期三", 3000],
  ["星期四", 4000],
  ["星期五", 1000],
  ["星期六", 5000],
  ["星期日", 7000],
];
const theme = "dark";

export default {
  "b_mult_gap--d--test": {
    option: (
      color = [
        com.getCommonLinearT2B("#648DFF", "#4023F9"),
        com.getCommonLinearT2B("#FBC906", "#F5834F"),
      ]
    ) => {
      return {
        backgroundColor: "transparent",
        tooltip: com.getCommonBarTooltip("d"),
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#3A4971",
            },
          },
          axisLabel: {
            color: "#CAD3E5",
          },
          axisTick: {
            show: false,
          },
        },
        grid: {
          ...com.getCommonGrid(),
          top: "16%",
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A4971",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#CAD3E5",
          },
          splitLine: {
            show: false,
          },
        },
        color,
        series: [
          {
            type: "bar",
            barMaxWidth: "25%",
            itemStyle: {
              color: ({ dataIndex }) => {
                const index = dataIndex % 2;
                return color[index];
              },
              borderRadius: 8,
            },
          },
        ],
      };
    },
    dataset,
    theme,
    desc: "柱状图多色深底(普通颜色间隔)",
  },
};
