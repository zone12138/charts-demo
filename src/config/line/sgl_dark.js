import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_sgl as dataset } from "@/data/index";
import { transformColorAlpha } from "@/utils/color";
const theme = "dark";
const type = "line";

const tooltip = com.getCommonLineTooltip("d");
const grid = com.getCommonGrid();

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
  "l_sgl_com--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#3C91F6"];

      return {
        tooltip,
        grid,
        xAxis: {
          type: "category",
          ...com.axisLabelShow("#D3DBE2"),
          ...com.splitLineHide,
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        yAxis: {
          type: "value",
          ...com.splitLineShow("#74939D36", "dashed"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            symbol: "circle",
            symbolSize: 10,
            showSymbol: false,
            itemStyle: {
              borderColor: "#FFFFFF",
              borderWidth: 3,
            },
            areaStyle: {},
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "折线图单数据深底(普通)",
  },
  "l_sgl_guide--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#CE9417"];
      return {
        tooltip,
        grid: {
          ...grid,
          top: "12%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            margin: 16,
            color: "#D3DBE2",
          },
          ...com.axisLineHide,
          ...com.splitLineHide,
          ...com.axisTickHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#D3DBE2"),
          ...com.splitLineShow("#74939D36", "dashed"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,
            label: { show: true, color: "inherit" },
          },
          {
            type: "bar",
            barWidth: 1,
            itemStyle: {
              color: transformColorAlpha(color[0], 0.3),
            },
            ...com.itemNoneEvent,
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "折线图单数据深底(带纵向指引线)",
  },
  "l_mult_withdashed--d": {
    option: {
      tooltip: com.getCommonLineTooltip("d"),
      legend: {
        right: "4%",
        textStyle: {
          color: "#89A0CE",
        },
      },
      textStyle: {
        color: "#D3DBE2",
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
            color: "#2D4563",
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
          },
          lineStyle: {
            type: [4, 4],
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
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#FF77B6"),
          },
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "折线图多色深底(带虚线)",
  },
  "l_mult_areastyle--d": {
    option: {
      tooltip: com.getCommonLineTooltip("d"),
      legend: {
        right: "4%",
        textStyle: {
          color: "#89A0CE",
        },
      },
      textStyle: {
        color: "#D3DBE2",
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
            color: "#313D4D",
            type: [3, 3],
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
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#95D202"),
          },
        },
        {
          type: "line",
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#7789FF"),
          },
        },
        {
          type: "line",
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#00D48F"),
          },
        },
        {
          type: "line",
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 3,
          },
          areaStyle: {
            color: com.getCommonLinearT2B4Line("#FF77B6"),
          },
        },
      ],
    },
    dataset: dataset_mult,
    theme,
    desc: "折线图多色深底(带阴影颜色)",
  },
};
