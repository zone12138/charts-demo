import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_sgl as dataset } from "@/data/index";

const theme = "light";
const type = "line";

const tooltip = com.getCommonLineTooltip();
const grid = com.getCommonGrid();

export default {
  "l_sgl_com--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#3C91F6"];
      return {
        tooltip,
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisLabel: {
            margin: 12,
          },
          ...com.axisLineHide,
          ...com.splitLineHide,
          ...com.axisTickHide,
        },
        grid,
        yAxis: {
          type: "value",
          ...com.splitLineShow("#EBF5FF"),
          ...com.axisLineHide,
          ...com.axisTickHide,
        },
        color,
        series: [
          {
            type: "line",
            ...com.getCommonLineSymbol4Light,
            areaStyle: {},
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "折线图单数据浅底(普通)",
  },
};
