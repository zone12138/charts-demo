import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_sgl as dataset } from "@/data/index";
import { transformColorAlpha } from "@/utils/color";

const theme = "dark";
const type = "line";

const tooltip = com.getCommonLineTooltip("d");
const grid = com.getCommonGrid();

export default {
  "l_sgl_com--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#3C91F6"];
      return {
        tooltip,
        grid,
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            color: "#D3DBE2",
            margin: 12,
          },
          ...com.splitLineHide,
          ...com.axisLineHide,
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
};
