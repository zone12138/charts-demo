import { isEmpty } from "lodash-es";
import * as com from "../common";
import { transformColorAlpha } from "@/utils/color";
import { Log } from "@/utils";

const theme = "dark";
const type = "bar";
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
const tooltip = com.getCommonBarTooltip("d");
const grid = com.getCommonGrid();

export default {
  "b_sgl_com--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#4E95FF"];
      const usedColor = color[0];
      return {
        tooltip,
        grid,
        xAxis: {
          type: "category",
          ...com.axisLineShow("#202F52"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLineShow("#202F52"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.splitLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "bar",
            barMaxWidth: "35%",
            itemStyle: {
              borderColor: "transparent",
              borderWidth: 10,
            },
            showBackground: true,
            backgroundStyle: {
              color: "transparent",
              borderColor: transformColorAlpha(usedColor, 0.26),
              borderWidth: 1,
            },
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "柱状图单数据深底(普通)",
  },
  "b_sgl_hill--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = ["rgba(90, 117, 229, 0.68)", "rgba(83, 90, 117, 0.49)"];
      const [usedColor, tipColor = "rgba(83, 90, 117, 0.49)"] = color;
      return {
        tooltip,
        grid: {
          ...grid,
          top: "16%",
        },
        xAxis: {
          type: "category",
          ...com.axisLineShow("#202F52"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#CAD3E5"),
          ...com.splitLineShow("rgba(110, 130, 154, 0.33)"),
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
            label: {
              show: true,
              position: "top",
              backgroundColor: tipColor,
              borderRadius: 4,
              padding: [5, 5, 2, 5],
              color: "#fff",
            },
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "柱状图单数据深底(峰状)",
  },
  "b_sgl_withline--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = [com.getCommonLinearT2B("#648DFF", "#4023F9")];
      return {
        tooltip,
        grid: {
          ...grid,
          top: "16%",
          show: true,
          borderColor: "#3B4B75",
        },
        xAxis: {
          type: "category",
          ...com.splitLineShow("#3B4B75"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.axisLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#CAD3E5"),
          ...com.splitLineShow("#3B4B75"),
          ...com.axisTickHide,
          ...com.axisLineHide,
        },
        color,
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
            ...com.itemNoneEvent,
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
      };
    },
    type,
    dataset,
    theme,
    desc: "柱状图单数据深底(带折线)",
  },
  "b_sgl_stripe--d": {
    option: (color) => {
      if (!Array.isArray(color) || color.length < 2) {
        Log.warning(
          "传递颜色值不是数组或者数组长度小于2，将忽略传递值，使用默认的颜色"
        );
        color = [
          com.getCommonLinearT2B("#648DFF", "#4023F9"),
          com.getCommonLinearT2B("#FBC906", "#F5834F"),
        ];
      }
      return {
        tooltip,
        grid: {
          ...grid,
          top: "16%",
        },
        xAxis: {
          type: "category",
          ...com.axisLineShow("#3A4971"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLineShow("#3A4971"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.splitLineHide,
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
    type,
    dataset,
    theme,
    desc: "柱状图单数据深底(颜色间隔)",
  },
  "b_sgl_stripe2--d": {
    option: (color) => {
      if (!Array.isArray(color) || color.length < 2) {
        Log.warning(
          "传递颜色值不是数组或者数组长度小于2，将忽略传递值，使用默认的颜色"
        );
        color = ["#2EC6FF", "#D2E528"];
      }
      return {
        tooltip,
        grid,
        xAxis: {
          type: "category",
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisLineShow("#202F52"),
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#CAD3E5"),
          ...com.splitLineShow("#2F5271"),
          ...com.axisTickHide,
          ...com.axisLineHide,
        },
        color,
        series: [
          {
            type: "bar",
            barMaxWidth: "25%",
            itemStyle: {
              borderColor: "transparent",
              borderWidth: 10,
              color: ({ dataIndex }) => {
                const index = dataIndex % 2;
                return com.getCommonLinearT2B(
                  color[index],
                  transformColorAlpha(color[index], 0)
                );
              },
            },
            showBackground: true,
            backgroundStyle: {
              color: "rgba(37, 57, 87, 0.66)",
            },
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "柱状图单数据深底(颜色间隔2)",
  },
};
