import * as com from "../common";
const theme = "light";
const dataset = [
  ["", "营业额"],
  ["星期一", 2500],
  ["星期二", 8000],
  ["星期三", 3000],
  ["星期四", 4000],
  ["星期五", 1000],
  ["星期六", 5000],
  ["星期日", 7000],
];
const dataset_mult = [
  ["xName", "A", "B", "C", "D"],
  ["星期一", 2500, 1000, 3000, 6000],
  ["星期二", 8000, 7000, 4000, 3600],
  ["星期三", 3000, 4000, 2000, 5600],
  ["星期四", 4000, 6000, 6000, 3600],
  ["星期五", 1000, 2000, 8000, 2600],
  ["星期六", 5000, 4000, 1000, 7600],
  ["星期日", 7000, 3000, 3000, 2600],
];
export default {
  "l_sgl--l": {
    option: {
      tooltip: com.getCommonLineTooltip(),
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
        splitLine: {
          lineStyle: {
            color: "#EBF5FF",
          },
        },
        axisTick: {
          show: false,
        },
      },
      color: ["#3C91F6"],
      series: [
        {
          type: "line",
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#3C91F6"),
          },
        },
      ],
    },
    dataset,
    theme,
    desc: "折线图单色浅底",
  },
  "l_mult--l": {
    option: {
      tooltip: com.getCommonLineTooltip(),
      legend: {
        right: "4%",
        symbol: "circle",
        itemHeight: 14,
        itemWidth: 14,
        textStyle: {
          color: "#89A0CE",
        },
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ["#63C9F616", "transparent"],
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      grid: {
        ...com.getCommonGrid(),
        top: "12%",
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#ECECEC",
          },
        },
        axisTick: {
          show: false,
        },
      },
      color: ["#02C4D2", "#FF8629"],
      series: [
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
        },
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "折线图多色浅底(X轴斑马纹)",
  },
  "l_mult_areastyle--l": {
    option: {
      tooltip: com.getCommonLineTooltip(),
      legend: {
        right: "4%",
        textStyle: {
          color: "#89A0CE",
        },
      },
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
      grid: {
        ...com.getCommonGrid(),
        top: "12%",
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#ECECEC",
          },
        },
        axisTick: {
          show: false,
        },
      },
      color: [
        "#95D202",
        "#7789FF",
        "#00D48F",
        "#FF77B6",
        "#1EB6FF",
        "#FF8629",
        "#FFC337",
      ],
      series: [
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#95D202"),
          },
        },
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#7789FF"),
          },
        },
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#00D48F"),
          },
        },
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 10,
          showSymbol: false,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
            shadowColor: "#A7B9C2",
            shadowOffsetY: 3,
            shadowBlur: 6,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#FF77B6"),
          },
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "折线图多色浅底(带阴影颜色)",
  },
};
