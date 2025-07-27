const theme = "light";
const dataset = {
  source: [
    ["", "营业额"],
    ["星期一", 2500],
    ["星期二", 8000],
    ["星期三", 3000],
    ["星期四", 4000],
    ["星期五", 5000],
    ["星期六", 5000],
    ["星期日", 7000],
  ],
};
export default {
  "p_rose--l": {
    option: {
      tooltip: {},
      legend: {
        icon: "circle",
        orient: "vertical",
        right: "6%",
      },
      color: [
        "#1BD1B2",
        "#2976DC",
        "#2068BD",
        "#2195CC",
        "#35C9C6",
        "#72CC7E",
        "#FCDC53",
      ],
      series: [
        {
          type: "pie",
          roseType: "radius",
          label: {
            show: false,
          },
          radius: ["10%", "75%"],
        },
        {
          type: "pie",
          roseType: "radius",
          label: {
            show: false,
          },
          radius: ["0%", "10%"],
          itemStyle: {
            color: "#FFFFFF",
          },
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图(玫瑰图)",
  },
  "p_rose_label--l": {
    option: {
      tooltip: {},
      legend: {
        icon: "circle",
        orient: "vertical",
        right: "6%",
      },
      color: [
        "#68EFFE",
        "#68C2FE",
        "#D6FF84",
        "#FFF67F",
        "#FFBD82",
        "#72CC7E",
        "#FCDC53",
      ],
      series: [
        {
          type: "pie",
          roseType: "radius",
          label: {
            // show: false,
            rich: {
              val: {
                color: "#FF8F2B",
              },
            },
            formatter: "{b}{val| {@[1]}}",
          },
          radius: ["10%", "75%"],
        },
        {
          type: "pie",
          roseType: "radius",
          label: {
            show: false,
          },
          radius: ["0%", "10%"],
          itemStyle: {
            color: "#FFFFFF",
          },
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图(玫瑰图带标题)",
  },
  "p_com_label--l": {
    option: {
      tooltip: {},
      legend: {
        icon: "circle",
        // orient: "vertical",
        bottom: "6%",
      },
      color: [
        "#1BD1B2",
        "#2976DC",
        "#2068BD",
        "#2195CC",
        "#35C9C6",
        "#72CC7E",
        "#FCDC53",
      ],
      series: [
        {
          type: "pie",
          label: {
            show: false,
          },
          labelLine: {
            length: 30,
          },
          emphasis: {
            scaleSize: 15,
            label: {
              show: true,
            },
          },
          radius: ["20%", "50%"],
        },
        {
          type: "pie",
          label: {
            show: false,
          },
          radius: ["0%", "20%"],
          itemStyle: {
            color: "#FFFFFF",
          },
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
        {
          type: "pie",
          label: {
            show: false,
          },
          itemStyle: {
            opacity: 0.5,
          },
          radius: ["50%", "60%"],
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图(普通带标题)",
  },
  "p_ring--l": {
    option: {
      tooltip: {},
      color: [
        "#1BD1B2",
        "#2976DC",
        "#2068BD",
        "#2195CC",
        "#35C9C6",
        "#72CC7E",
        "#FCDC53",
      ],
      series: [
        {
          type: "pie",
          label: {
            show: false,
          },
          z: 3,
          radius: ["30%", "51%"],
        },
        {
          type: "pie",
          label: {
            show: false,
          },
          itemStyle: {
            color: "#FFFFFF",
          },
          data: [1],
          radius: ["0%", "20%"],
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
        {
          type: "pie",
          label: {
            show: false,
          },
          itemStyle: {
            color: "#FFFFFF",
            shadowColor: "#BACFE5",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 6,
          },
          data: [1],
          radius: ["20%", "60%"],
          tooltip: { show: false },
          emphasis: { disabled: true },
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图(圆环图)",
  },
  "p_ring_gap--l": {
    option: {
      tooltip: {},
      color: [
        "#1BD1B2",
        "#2976DC",
        "#2068BD",
        "#2195CC",
        "#35C9C6",
        "#72CC7E",
        "#FCDC53",
      ],
      series: [
        {
          type: "pie",
          label: {
            show: false,
            rich: {
              val: {
                color: "#FC8E0C",
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
          // itemStyle: {
          //   borderWidth: 5,
          //   borderColor: "#FFFFFF",
          // },
          padAngle: 5, // ^5.5.0 支持，不存在上方itemStyle中，borderColor需要和背景色一致的顾虑
          radius: ["30%", "51%"],
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图(有间距圆环图)",
  },
  "p_ring_persent--l": {
    option: {
      tooltip: {},
      color: [
        "#1BD1B2",
        "#2976DC",
        "#2068BD",
        "#2195CC",
        "#35C9C6",
        "#72CC7E",
        "#FCDC53",
      ],
      series: [
        {
          type: "pie",
          label: {
            show: false,
            rich: {
              val: {
                color: "#20B2AA",
                fontSize: 20,
              },
            },
            formatter: "{val| {d}%}\n{b}",
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
          radius: ["30%", "51%"],
        },
      ],
    },
    dataset,
    theme,
    desc: "饼图(百分比圆环图)",
  },
};
