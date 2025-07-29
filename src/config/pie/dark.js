import { isEmpty } from "lodash-es";
import * as com from "../common";
import { dataset_sgl as dataset } from "@/data/index";

const theme = "dark";
const type = "pie";

const legend = com.getCommonPieLegend("d");
const legend_r = com.getCommonPieLegend("d", "r");

const dataset_percent = [
  ["", "营业额"],
  ["星期一", 80],
];

const tooltip = com.getCommonPieTooltip("d");

export default {
  "p_ring--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = [
          "#2B5ADE",
          "#C5D6F3",
          "#62C664",
          "#DDAF61",
          "#35C9C6",
          "#FF2C2C",
          "#FFC72C",
        ];
      return {
        tooltip,
        legend,
        color,
        series: [
          {
            type: "pie",
            radius: ["35%", "51%"],
            label: {
              show: false,
              rich: {
                val: {
                  color: "#FC8E0C",
                  fontSize: 20,
                },
              },
              color: "#FFFFFF",
              formatter: "{b}\n{val| {@[1]}}",
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
          {
            type: "pie",
            radius: ["59%", "59.5%"],
            itemStyle: {
              color: "#334866",
            },
            ...com.itemNoneEvent,
            data: [0],
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "饼图深底(圆环图)",
  },
  "p_ring_widthbg--d": {
    option: (color) => {
      if (isEmpty(color) || !Array.isArray(color))
        color = [
          "#2B5ADE",
          "#C5D6F3",
          "#62C664",
          "#DDAF61",
          "#35C9C6",
          "#FF2C2C",
          "#FFC72C",
        ];
      return {
        tooltip,
        legend,
        color,
        series: [
          {
            type: "pie",
            radius: ["35%", "51%"],
            label: { show: false },
          },
          {
            name: "",
            type: "custom",
            coordinateSystem: "none",
            renderItem: com.renderItem4Pie4,
            data: [0],
          },
        ],
      };
    },
    type,
    dataset,
    theme,
    desc: "饼图深底(带背景圆环图)",
  },
  "p_ring_gap--d": {
    option: {
      tooltip,
      legend,
      color: ["#1D83FA", "#1EE7E7", "#E78C46", "#886EFF", "#FFC722"],
      series: [
        {
          type: "pie",
          radius: ["35%", "51%"],
          label: {
            show: false,
            rich: {
              val: {
                color: "#FFFFFF",
                fontSize: 20,
              },
            },
            color: "#BAC3D4",
            formatter: "{b}\n{val| {@[1]}}",
            position: "center",
          },
          padAngle: 5,
          emphasis: {
            label: {
              show: true,
            },
          },
          z: 10,
        },
        {
          type: "pie",
          radius: ["26%", "60%"],
          itemStyle: {
            color: "#122752",
          },
          ...com.itemNoneEvent,
          data: [0],
          z: 5,
        },
        {
          type: "pie",
          radius: ["0%", "60%"],
          itemStyle: {
            color: "#081532",
          },
          ...com.itemNoneEvent,
          data: [0],
          z: 1,
        },
        {
          name: "",
          type: "custom",
          coordinateSystem: "none",
          renderItem: com.renderItem4Pie,
          data: [0],
        },
      ],
    },
    type,
    dataset,
    theme,
    desc: "饼图深底(有间距圆环图)",
  },
  "p_ring_shadow--d": {
    option: {
      tooltip,
      legend,
      color: [
        "#3D77FF",
        "#6AB4FF",
        "#1DE8FF",
        "#FF742C",
        "#FF2C2C",
        "#50FFB3",
        "#FF2CFF",
      ],
      series: [
        {
          type: "pie",
          radius: ["45%", "51%"],
          label: {
            show: false,
            rich: {
              val: {
                color: "#FFFFFF",
                fontSize: 20,
              },
            },
            formatter: "{b}\n{val| {@[1]}}",
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          z: 10,
        },
        {
          type: "pie",
          radius: ["51%", "65%"],
          itemStyle: {
            opacity: 0.2,
          },
          ...com.itemNoneEvent,
          z: 5,
        },
      ],
    },
    type,
    dataset,
    theme,
    desc: "饼图深底(带阴影圆环图)",
  },
  "p_ring_shadow2--d": {
    option: {
      tooltip,
      legend,
      color: ["#37FFC9", "#FFE777", "#E78C46", "#886EFF", "#32A1FF"],
      series: [
        {
          type: "pie",
          radius: ["42%", "50%"],
          padAngle: 6,
          z: 10,
        },
        {
          type: "pie",
          radius: ["34%", "42%"],
          itemStyle: {
            opacity: 0.6,
          },
          padAngle: 6,
          ...com.itemNoneEvent,
          z: 5,
        },
        {
          type: "pie",
          radius: ["26%", "34%"],
          itemStyle: {
            opacity: 0.3,
          },
          padAngle: 6,
          ...com.itemNoneEvent,
          z: 5,
        },
      ],
    },
    type,
    dataset,
    theme,
    desc: "饼图深底(带阴影圆环图2)",
  },
  "p_ring_shadow3--d": {
    option: {
      tooltip,
      legend: legend_r,
      color: ["#37FFC9", "#FFE777", "#E78C46", "#886EFF", "#32A1FF"],
      series: [
        {
          type: "pie",
          radius: ["52%", "60%"],
          label: {
            show: false,
          },
          padAngle: 6,
          z: 10,
        },
        {
          type: "pie",
          radius: ["40%", "52%"],
          itemStyle: {
            opacity: 0.2,
          },
          padAngle: 6,
          ...com.itemNoneEvent,
          z: 5,
        },
        {
          type: "pie",
          radius: ["30%", "34%"],
          padAngle: 6,
          ...com.itemNoneEvent,
          z: 5,
        },
        {
          name: "",
          type: "custom",
          coordinateSystem: "none",
          renderItem: com.renderItem4Pie2,
          data: [0],
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图深底(带阴影圆环图3)",
  },
  "p_ring_shadow4--d": {
    option: {
      title: {
        text: "设备统计",
        top: "center",
        left: "center",
        textStyle: {
          color: "#FFFFFF",
        },
      },
      tooltip: com.getCommonPieTooltip("d"),
      legend: {
        top: "center",
        right: "5%",
        itemGap: 16,
        orient: "vertical",
        itemHeight: 12,
        itemWidth: 12,
        textStyle: {
          color: "#DBEEFF",
        },
      },
      color: ["#FF5B00", "#FFA800", "#FFE000", "#006CED", "#00CFFF", "#00FFFF"],
      series: [
        {
          type: "pie",
          radius: ["55%", "60%"],
          label: {
            show: false,
          },
          itemStyle: {
            borderRadius: 10,
          },
          padAngle: 6,
          z: 10,
        },
        {
          type: "pie",
          radius: ["48%", "55%"],
          itemStyle: {
            borderRadius: 10,
            opacity: 0.2,
          },
          padAngle: 6,
          ...com.itemNoneEvent,
          z: 5,
        },
        {
          name: "",
          type: "custom",
          coordinateSystem: "none",
          renderItem: com.renderItem4Pie3,
          data: [0],
        },
        {
          type: "pie",
          radius: ["41.5%", "42%"],
          itemStyle: {
            color: "#00E3EE",
          },
          ...com.itemNoneEvent,
        },
        {
          type: "pie",
          radius: ["30%", "42%"],
          itemStyle: {
            color: {
              type: "radial",
              x: 0.5,
              y: 0.42,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: "rgb(0, 227, 238, 0)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 227, 238, 0)",
                },
                {
                  offset: 0.85,
                  color: "rgba(0, 227, 238, 0.1)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 227, 238, 0.3)",
                },
              ],
            },
          },
          ...com.itemNoneEvent,
          data: [0],
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图深底(带阴影圆环图4)",
  },
  "p_ring_percent--d": {
    option: {
      grid: com.getCommonGrid(),
      angleAxis: {
        polarIndex: 0,
        min: 0,
        max: 100,
        show: false,
        startAngle: 90,
      },
      radiusAxis: {
        type: "category",
        show: true,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      polar: {
        center: ["50%", "50%"], //中心点位置
        radius: "80%", //图形大小
      },
      color: ["#16CEB9"],
      series: [
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barMaxWidth: "10%", //大的占比环
        },
      ],
    },
    dataset: dataset_percent,
    theme,
    desc: "饼图(进度条圆环图)",
  },
  "p_ring_mult_percent--d": {
    option: {
      grid: com.getCommonGrid(),
      legend: {
        orient: "vertical",
        top: "center",
        right: "5%",
        itemHeight: 12,
        itemWidth: 12,

        textStyle: {
          color: "#DBEEFF",
        },
      },
      angleAxis: {
        polarIndex: 0,
        min: 0,
        max: 100,
        show: false,
        startAngle: 90,
      },
      radiusAxis: {
        type: "category",
        show: true,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      polar: {
        center: ["50%", "50%"], //中心点位置
        radius: "80%", //图形大小
      },
      color: ["#FFD653", "#E78C46", "#3434B0", "#164BCD", "#01B3EE", "#16CEB9"],
      series: [
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barMaxWidth: "5%", //大的占比环
        },
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barMaxWidth: "5%", //大的占比环
        },
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barMaxWidth: "5%", //大的占比环
        },
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barMaxWidth: "5%", //大的占比环
        },
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barMaxWidth: "5%", //大的占比环
        },
        {
          type: "bar",
          z: 10,
          showBackground: true,
          backgroundStyle: {
            color: "#1A3163",
          },
          coordinateSystem: "polar",
          roundCap: true,
          barGap: "100%",
          barMaxWidth: "5%", //大的占比环
        },
      ],
    },
    dataset: {
      source: [
        ["", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        ["营业额", 50, 80, 30, 40, 50, 60],
      ],
    },
    theme,
    desc: "饼图(多色进度条圆环图)",
  },
};
