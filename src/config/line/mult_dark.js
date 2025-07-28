import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_mult_less as dataset } from "@/data/index";

const theme = "dark";
const type = "line";
const isMult = true;

const tooltip = com.getCommonLineTooltip("d");
const legend = com.getCommonBarLegend("d");
const grid = com.getCommonGrid();

export default {
  "l_mult_Xstripe--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = ["#02C4D2", "#FF8629"];
      return {
        tooltip,
        legend,
        grid: {
          ...grid,
          top: "12%",
        },
        xAxis: {
          type: "category",
          splitArea: {
            show: true,
            areaStyle: {
              color: ["#63C9F616", "transparent"],
            },
          },
          ...com.axisLabelShow("#D3DBE2"),
          ...com.splitLineHide,
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        yAxis: {
          type: "value",
          ...com.axisLabelShow("#D3DBE2"),
          ...com.splitLineShow("#376E8F"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            smooth: true,
            ...com.getCommonLineSymbol
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    isMult,
    desc: "折线图多数据深底(X轴斑马纹)",
  },
};
