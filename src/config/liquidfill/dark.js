import { isEmpty } from "lodash-es";
import * as com from "../common";
import { transformColorAlpha } from "@/utils/color";
import { item4lf, item4lf2 } from "@/utils/renderItem";

const theme = "dark";
const type = "liquidFill";
const dataset = [[0.56, 0.56, 0.56]];

export default {
  "lf_com--d": {
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
              color: transformColorAlpha(usedColor, 0.25),
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
    desc: "水球图深底(普通)",
  },
  "lf_com2--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color)) color = ["#E7E490"];
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
              color: "transparent",
            },
            z: 10,
          },
          {
            name: "水球图装饰",
            type: "custom",
            coordinateSystem: "none",
            renderItem: (...args) => item4lf2(...args, usedColor),
            data: [0],
          },
          {
            type: "pie",
            radius: ["0%", "45%"],
            ...com.itemNoneEvent,
            data: [0],
            itemStyle: {
              color: transformColorAlpha(usedColor, 0.05),
            },
            z: 1,
          },
          {
            type: "pie",
            radius: ["45%", "60%"],
            ...com.itemNoneEvent,
            data: [0],
            itemStyle: {
              color: transformColorAlpha(usedColor, 0.08),
            },
            z: 1,
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "水球图深底(普通2)",
  },
  "lf_com3--d": {
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
            data: [0],
            itemStyle: {
              color: com.getCommonLinearT2B(
                transformColorAlpha(usedColor, 0.08),
                transformColorAlpha(usedColor, 0.75)
              ),
            },
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "水球图深底(普通3)",
  },
};
