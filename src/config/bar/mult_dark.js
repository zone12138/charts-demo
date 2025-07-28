import { isEmpty } from "lodash-es";
import * as com from "../common";

const theme = "dark"; // 主题（dark/light）
const type = "bar"; // 图表类型（bar/line/pie/liquidFill）
const isMult = true; // 是否多数据（主要用在柱状图和折线图）
const dataset_less = [
  ["营业额", "零食", "饮料"],
  ["星期一", 2500, 1000],
  ["星期二", 8000, 1000],
  ["星期三", 3000, 1000],
  ["星期四", 4000, 1000],
  ["星期五", 1000, 1000],
  ["星期六", 5000, 1000],
  ["星期日", 7000, 1000],
];
const dataset = [
  ["营业额", "零食", "饮料", "水果生鲜", "日常用品"],
  ["星期一", 2500, 1000, 3000, 2600],
  ["星期二", 8000, 1000, 3000, 2600],
  ["星期三", 3000, 1000, 3000, 2600],
  ["星期四", 4000, 1000, 3000, 2600],
  ["星期五", 1000, 1000, 3000, 2600],
  ["星期六", 5000, 1000, 3000, 2600],
  ["星期日", 7000, 1000, 3000, 2600],
];
const tooltip = com.getCommonBarTooltip("d");
const legend = com.getCommonBarLegend("d");
const grid = com.getCommonGrid();

export default {
  "b_mult_stack--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = ["#FC9E5E", "#3689EC", "#4DE8CF", "#F7D358"];
      }
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          top: "16%",
        },
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
          ...com.splitLineShow("#26365D"),
          ...com.axisTickHide,
          ...com.axisLineHide,
        },
        color,
        series: [
          {
            type: "bar",
            stack: "stack",
            barMaxWidth: "25%",
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "柱状图多数据深底(堆叠)",
  },
  "b_mult_com--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = ["#006FFF", "#00FFB1", "#E1E1E1", "#F7D358"];
      }
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          top: "16%",
        },
        xAxis: {
          type: "category",
          ...com.axisLineShow("#355AB3"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisLineShow("#355AB3"),
          ...com.splitLineShow("#355AB3", "dashed"),
          ...com.axisTickHide,
        },
        color,
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
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "柱状图多数据深底(普通)",
  },
  "b_mult_hrz2--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = [
          com.getCommonLinearL2R("#2764E5", "#0EE0FF"),
          com.getCommonLinearL2R("#BB6B05", "#F1C03B"),
        ];
      }
      return {
        tooltip,
        legend,
        grid,
        xAxis: {
          type: "value",
          ...com.axisLineShow("#B1DFFF"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        yAxis: {
          type: "category",
          ...com.axisLabelShow("#B1DFFF"),
          ...com.axisLineHide,
          ...com.axisTickHide,
          ...com.splitLineHide,
        },
        color,
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
        ],
      };
    },
    type,
    dataset: dataset_less,
    theme,
    isMult,
    desc: "柱状图多数据深底(横向)",
  },
  "b_mult_stack_hrz--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = ["#2E5BB0", "#67BA6B", "#188384", "#FFADA0"];
      }
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          right: '10%'
        },
        xAxis: {
          type: "value",
          ...com.axisLineShow("#B1DFFF"),
          ...com.splitLineShow("#466695"),
          ...com.axisLabelHide,
          ...com.axisTickHide
        },
        yAxis: {
          type: "category",
          ...com.axisLabelShow("#B1DFFF"),
          ...com.axisLineHide ,
          ...com.splitLineHide,
          ...com.axisTickHide
        },
        color,
        series: [
          {
            type: "bar",
            label: {
              show: true,
              position: "right",
              color: "#FFFFFF",
            },
            itemStyle: {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            stack: "stack",
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "柱状图多色数据深底(堆叠+横向)",
  },
  "b_mult_stack_hrz2--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) {
        color = ["#FFAD20", "#FFF56D", "#116FFD", "#11FBFD"];
      }
      return {
        tooltip,
        legend,
        grid,
        xAxis: {
          type: "value",
          ...com.splitLineShow("#466695"),
          ...com.axisLineShow("#B1DFFF"),
          ...com.axisLabelShow("#CAD3E5"),
          ...com.axisTickHide,
        },
        yAxis: {
          type: "category",
          ...com.axisLabelShow("#B1DFFF"),
          ...com.axisLineHide,
          ...com.splitLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "bar",
            stack: "stack1",
          },
          {
            type: "bar",
            stack: "stack2",
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "柱状图多数据深底(堆叠+横向2)",
  },
};
