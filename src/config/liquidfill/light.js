import { isEmpty } from "lodash-es";
import * as com from "../common";
import { transformColorAlpha } from "@/utils/color";
import { item4lf, item4lf2 } from "@/utils/renderItem";
import { dataset_lf as dataset } from "@/data/index";

const theme = "light";
const type = "liquidFill";

export default {
  "lf_com--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#4C82FC"];
      const usedColor = color[0];
      return {
        color,
        series: [
          {
            name: "水球图",
            type: "liquidFill",
            outline: {
              show: false,
            },
            radius: "60%",
            itemStyle: {
              color: usedColor,
              opacity: 0.6,
              shadowColor: "#FFFFFF00",
            },
            label: {
              color: usedColor,
            },
            backgroundStyle: {
              color: transformColorAlpha(usedColor, 0.15),
            },
          },
          {
            name: "水球图装饰",
            type: "custom",
            coordinateSystem: "none",
            renderItem: (...args) => item4lf(...args, usedColor),
            data: [0],
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "水球图浅底(普通)",
  },
  "lf_com2--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#3DC15A"];
      const usedColor = color[0];
      return {
        color,
        series: [
          {
            name: "水球图",
            type: "liquidFill",
            outline: {
              show: false,
            },
            radius: "60%",
            itemStyle: {
              color: usedColor,
              opacity: 0.6,
              shadowColor: "#FFFFFF00",
            },
            label: {
              color: usedColor,
            },
            backgroundStyle: {
              color: transformColorAlpha(usedColor, 0.15),
            },
          },
          {
            name: "水球图装饰",
            type: "custom",
            coordinateSystem: "none",
            renderItem: (...args) => item4lf2(...args, usedColor),
            data: [0],
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "水球图浅底(普通2)",
  },
  "lf_com3--l": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#3BC08B"];
      const usedColor = color[0];
      return {
        color,
        series: [
          {
            name: "水球图",
            type: "liquidFill",
            outline: {
              show: false,
            },
            radius: "60%",
            data: [0],
            itemStyle: {
              color: usedColor,
              opacity: 0.6,
              shadowColor: "#FFFFFF00",
            },
            label: {
              color: usedColor,
            },
            backgroundStyle: {
              color: "transparent",
            },
          },
          {
            type: "pie",
            radius: ["65%", "67%"],
            ...com.itemNoneEvent,
            itemStyle: {
              color: com.getCommonLinearT2B(
                transformColorAlpha(usedColor, 0.08),
                transformColorAlpha(usedColor, 0.75)
              ),
            },
            data: [0],
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "水球图浅底(普通3)",
  },
};
