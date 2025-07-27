import * as com from "../common";
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
  ["星期一", 2500, 1000, 3000, 2600],
  ["星期二", 8000, 1000, 3000, 2600],
  ["星期三", 3000, 1000, 3000, 2600],
  ["星期四", 4000, 1000, 3000, 2600],
  ["星期五", 1000, 1000, 3000, 2600],
  ["星期六", 5000, 1000, 3000, 2600],
  ["星期日", 7000, 1000, 3000, 2600],
];
const theme = "dark";
const type = "bar"

export default {
  "b_sgl_com--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#202F52",
          },
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        axisTick: {
          show: false,
        },
      },
      grid: com.getCommonGrid(),
      yAxis: {
        type: "value",
        axisLine: {
          show: true,
          lineStyle: {
            color: "#202F52",
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
      color: ["#4E95FF"],
      series: [
        {
          type: "bar",
          barMaxWidth: "35%",
          itemStyle: {
            borderColor: "transparent",
            borderWidth: 8,
          },
          showBackground: true,
          backgroundStyle: {
            color: "transparent",
            borderColor: "rgba(78, 149, 255, 0.26)",
            borderWidth: 1,
          },
        },
      ],
    },
    type,
    dataset,
    theme,
    desc: "柱状图单色深底(普通)",
  },
  "b_sgl_hill--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#202F52",
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
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        splitLine: {
          lineStyle: {
            color: "rgba(110, 130, 154, 0.33)",
          },
        },
      },
      color: ["rgba(90, 117, 229, 0.68)"],
      series: [
        {
          type: "pictorialBar",
          barCategoryGap: "-50%",
          symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
          itemStyle: {
            borderWidth: 1,
          },
          label: {
            show: true,
            position: "top",
            backgroundColor: "rgba(83, 90, 117, 0.49)",
            borderRadius: 4,
            padding: [5, 5, 2, 5],
            color: "#fff",
          },
        },
      ],
    },
    dataset,
    theme,
    desc: "柱状图单色深底(峰状)",
  },
  "b_sgl_withline--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      xAxis: {
        type: "category",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#3B4B75",
          },
        },
        axisLine: {
          show: false,
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
        show: true,
        borderColor: "#3B4B75",
      },
      yAxis: {
        type: "value",
        splitNumber: 5,
        max: (value) => {
          const splitNumber = 5; // 与上面的配置保持一致
          return (value.max / (splitNumber - 1)) * splitNumber;
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        splitLine: {
          lineStyle: {
            color: "#3B4B75",
          },
        },
      },
      color: [com.getCommonLinearT2B("#648DFF", "#4023F9")],
      series: [
        {
          type: "bar",
          barMaxWidth: "20%",
          itemStyle: {
            borderRadius: 8,
          },
        },
        {
          type: "line",
          symbol: "circle",
          symbolSize: 16,
          encode: { y: 1 },
          tooltip: { show: false },
          emphasis: { disabled: true },
          label: {
            show: true,
            color: "#FFFFFF",
          },
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
          },
        },
      ],
    },
    dataset,
    theme,
    desc: "柱状图单色深底(带折线)",
  },
  "b_mult_stack--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      legend: {
        right: "4%",
        itemHeight: 10,
        itemWidth: 10,
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
          lineStyle: {
            color: "#202F52",
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
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#26365D",
          },
        },
      },
      color: ["#FC9E5E", "#3689EC", "#4DE8CF"],
      series: [
        {
          type: "bar",
          stack: "总量",
          barMaxWidth: "25%",
        },
        {
          type: "bar",
          stack: "总量",
          barMaxWidth: "25%",
        },
        {
          type: "bar",
          stack: "总量",
          barMaxWidth: "25%",
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "柱状图多色深底(堆叠)",
  },
  "b_mult_com--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      legend: {
        right: "4%",
        itemHeight: 10,
        itemWidth: 10,
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
          lineStyle: {
            color: "#355AB3",
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
        splitNumber: 5,
        max: (value) => {
          const splitNumber = 5; // 与上面的配置保持一致
          return (value.max / (splitNumber - 1)) * splitNumber;
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#355AB3",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#355AB3",
            type: "dashed",
          },
        },
      },
      color: ["#006FFF", "#00FFB1", "#E1E1E1"],
      series: [
        {
          type: "bar",
          barMaxWidth: "25%",
          showBackground: true,
          backgroundColor: "rgba(65, 92, 154, 0.32)",
          label: {
            show: true,
            color: "inherit",
            position: "top",
          },
        },
        {
          type: "bar",
          barMaxWidth: "25%",
          showBackground: true,
          backgroundColor: "rgba(65, 92, 154, 0.32)",
          label: {
            show: true,
            color: "inherit",
            position: "top",
          },
        },
        {
          type: "bar",
          barMaxWidth: "25%",
          showBackground: true,
          backgroundColor: "rgba(65, 92, 154, 0.32)",
          label: {
            show: true,
            color: "inherit",
            position: "top",
          },
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "柱状图多色深底(普通)",
  },
  "b_mult_gap--d": {
    option: {
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
      color: [
        [
          com.getCommonLinearT2B("#648DFF", "#4023F9"),
          com.getCommonLinearT2B("#FBC906", "#F5834F"),
        ],
      ],
      series: [
        {
          type: "bar",
          barMaxWidth: "25%",
          itemStyle: {
            color: ({ color, dataIndex }) => {
              const index = dataIndex % 2;
              return color[index];
            },
            borderRadius: 8,
          },
        },
      ],
    },
    dataset,
    theme,
    desc: "柱状图多色深底(普通颜色间隔)",
  },
  //   "b_mult_widthline--d": {
  //     option: {
  //       backgroundColor: "transparent",
  //       tooltip: com.getCommonBarTooltip("d"),
  //       legend: {
  //         right: "4%",
  //         itemHeight: 10,
  //         itemWidth: 10,
  //         itemStyle: {
  //           color: (params) => {
  //             console.log(
  //               `%c[Log]`,
  //               "color: #00ff; font-weight: 1000; font-family: Microsoft YaHei",
  //               " ☀『params』☀ ",
  //               params
  //             );
  //           },
  //         },
  //         textStyle: {
  //           color: "#89A0CE",
  //         },
  //       },
  //       xAxis: {
  //         type: "category",
  //         splitLine: {
  //           show: false,
  //         },
  //         axisLine: {
  //           lineStyle: {
  //             color: "#3A4971",
  //           },
  //         },
  //         axisLabel: {
  //           textStyle: {
  //             color: "#CAD3E5",
  //           },
  //         },
  //         axisTick: {
  //           show: false,
  //         },
  //       },
  //       grid: {
  //         ...com.getCommonGrid(),
  //         top: "16%",
  //       },
  //       yAxis: {
  //         type: "value",
  //         axisLine: {
  //           show: true,
  //           lineStyle: {
  //             color: "#3A4971",
  //           },
  //         },
  //         axisTick: {
  //           show: false,
  //         },
  //         axisLabel: {
  //           textStyle: {
  //             color: "#CAD3E5",
  //           },
  //         },
  //         splitLine: {
  //           show: false,
  //         },
  //       },
  //       color: [
  //         ["#648DFF", "#4023F9", "#FBC906", "#F5834F", "#64EFFF", "#01ACAC"],
  //       ],
  //       series: [
  //         {
  //           type: "bar",
  //           barMaxWidth: "25%",
  //           itemStyle: {
  //             color: (params) => {
  //               const { color, seriesIndex } = params;
  //               return {
  //                 type: "linear",
  //                 x: 0,
  //                 y: 0,
  //                 x2: 0,
  //                 y2: 1,
  //                 colorStops: [
  //                   { offset: 0, color: color[2 * seriesIndex] },
  //                   { offset: 1, color: color[2 * seriesIndex + 1] },
  //                 ],
  //                 global: false, // 缺省为 false
  //               };
  //             },
  //             borderRadius: 8,
  //           },
  //         },
  //         {
  //           type: "bar",
  //           barMaxWidth: "25%",
  //           itemStyle: {
  //             color: (params) => {
  //               const { color, seriesIndex } = params;
  //               return {
  //                 type: "linear",
  //                 x: 0,
  //                 y: 0,
  //                 x2: 0,
  //                 y2: 1,
  //                 colorStops: [
  //                   { offset: 0, color: color[2 * seriesIndex] },
  //                   { offset: 1, color: color[2 * seriesIndex + 1] },
  //                 ],
  //                 global: false, // 缺省为 false
  //               };
  //             },
  //             borderRadius: 8,
  //           },
  //         },
  //         {
  //           type: "bar",
  //           barMaxWidth: "25%",
  //           itemStyle: {
  //             color: (params) => {
  //               const { color, seriesIndex } = params;
  //               return {
  //                 type: "linear",
  //                 x: 0,
  //                 y: 0,
  //                 x2: 0,
  //                 y2: 1,
  //                 colorStops: [
  //                   { offset: 0, color: color[2 * seriesIndex] },
  //                   { offset: 1, color: color[2 * seriesIndex + 1] },
  //                 ],
  //                 global: false, // 缺省为 false
  //               };
  //             },
  //             borderRadius: 8,
  //           },
  //         },
  //       ],
  //     },
  //     dataset: dataset_mult,
  //     theme,
  //     desc: "柱状图多色深底(带折线)",
  //   },
  "b_mult_gap2--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      xAxis: {
        type: "category",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#202F52",
          },
        },
        axisLabel: {
          color: "#CAD3E5",
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
        axisLabel: {
          color: "#CAD3E5",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#2F5271",
          },
        },
      },
      color: [["#2EC6FF", "#D2E528"]],
      series: [
        {
          type: "bar",
          barMaxWidth: "25%",
          itemStyle: {
            borderColor: "transparent",
            borderWidth: 10,
            color: ({ color, dataIndex }) => {
              const index = dataIndex % 2;
              return com.getCommonLinearT2B(color[index], color[index] + "00");
            },
          },
          showBackground: true,
          backgroundStyle: {
            color: "rgba(37, 57, 87, 0.66)",
          },
        },
      ],
    },
    dataset,
    theme,
    desc: "柱状图多色深底(普通颜色间隔2)",
  },
  "b_mult_h--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      legend: {
        right: "4%",
        itemHeight: 10,
        itemWidth: 10,
        textStyle: {
          color: "#89A0CE",
        },
      },
      xAxis: {
        type: "value",
        splitLine: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#B1DFFF",
          },
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        axisTick: {
          show: false,
        },
      },
      grid: com.getCommonGrid(),
      yAxis: {
        type: "category",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#B1DFFF",
        },
        splitLine: {
          show: false,
        },
      },
      color: [
        com.getCommonLinearL2R("#2764E5", "#0EE0FF"),
        com.getCommonLinearL2R("#BB6B05", "#F1C03B"),
      ],
      series: [
        {
          type: "bar",
          itemStyle: {
            borderRadius: 8,
          },
          showBackground: true,
          backgroundStyle: {
            color: "rgba(37, 57, 87, 0.66)",
            borderRadius: 8,
          },
        },
        {
          type: "bar",
          itemStyle: {
            borderRadius: 8,
          },
          showBackground: true,
          backgroundStyle: {
            color: "rgba(37, 57, 87, 0.66)",
            borderRadius: 8,
          },
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "柱状图多色深底(横向)",
  },
  "b_mult_hstack--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      legend: {
        right: "4%",
        itemHeight: 10,
        itemWidth: 10,
        textStyle: {
          color: "#89A0CE",
        },
      },
      xAxis: {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#466695",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#B1DFFF",
          },
        },
        axisLabel: {
          color: "#CAD3E5",
        },
        axisTick: {
          show: false,
        },
      },
      grid: com.getCommonGrid(),
      yAxis: {
        type: "category",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#B1DFFF",
        },
        splitLine: {
          show: false,
        },
      },
      color: ["#FFAD20", "#FFF56D", "#116FFD", "#11FBFD"],
      series: [
        {
          type: "bar",
          stack: "总量",
        },
        {
          type: "bar",
          stack: "总量",
        },
        {
          type: "bar",
          stack: "总量2",
        },
        {
          type: "bar",
          stack: "总量2",
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "柱状图多色深底(横向堆叠)",
  },
  "b_mult_hstack2--d": {
    option: {
      backgroundColor: "transparent",
      tooltip: com.getCommonBarTooltip("d"),
      legend: {
        right: "4%",
        itemHeight: 10,
        itemWidth: 10,
        textStyle: {
          color: "#89A0CE",
        },
      },
      xAxis: {
        type: "value",
        max: ({ max }) => {
          return max * 1.25;
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#466695",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#B1DFFF",
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      grid: com.getCommonGrid(),
      yAxis: {
        type: "category",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#B1DFFF",
        },
        splitLine: {
          show: false,
        },
      },
      color: ["#2E5BB0", "#67BA6B", "#188384"],
      encode: {
        y: 1,
      },
      series: [
        {
          type: "bar",
          label: {
            show: true,
            position: "right",
            color: "#FFFFFF",
          },
          itemStyle: {
            borderColor: "#6694EC",
          },
          stack: "总量",
        },
        {
          type: "bar",
          label: {
            show: true,
            position: "right",
            color: "#FFFFFF",
          },
          itemStyle: {
            borderColor: "#A4FBA8",
          },
          stack: "总量",
        },
        {
          type: "bar",
          label: {
            show: true,
            position: "right",
            color: "#FFFFFF",
          },
          itemStyle: {
            borderColor: "#36D8D6",
          },
          stack: "总量",
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "柱状图多色深底(横向堆叠2)",
  },
};
