/**
 * 容器区域通用样式
 */
export const getCommonGrid = () => ({
  left: "4%",
  top: "8%",
  right: "4%",
  bottom: "6%",
  containLabel: true,
});

/**
 * 柱状图通用Tooltip样式
 * @param {string} theme 主题
 */
export const getCommonBarTooltip = (theme) => {
  return {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    ...(theme === "d"
      ? {
          backgroundColor: "#142349",
          borderWidth: 0,
          textStyle: { color: "#FFFFFF" },
        }
      : {}),
  };
};

/**
 * 柱状图通用Legend样式
 * @param {string} theme 主题
 */
export const getCommonBarLegend = (theme) => {
  return {
    right: "4%",
    itemHeight: 10,
    itemWidth: 10,
    textStyle: { color: theme === "d" ? "#CAD3E5" : "#333333" },
  };
};

/**
 * 折线图通用Legend样式
 * @param {string} theme 主题
 */
export const getCommonLineLegend = (theme) => {
  return {
    right: "4%",
    itemHeight: 10,
    itemWidth: 20,
    textStyle: { color: theme === "d" ? "#CAD3E5" : "#333333" },
  };
};

/**
 * 饼图通用Tooltip样式
 * @param {string} theme 主题
 */
export const getCommonPieTooltip = (theme) => {
  return theme === "d"
    ? {
        backgroundColor: "#142349",
        borderWidth: 0,
        textStyle: { color: "#FFFFFF" },
      }
    : {};
};

/**
 * 折线图通用Tooltip样式
 * @param {string} theme 主题
 */
export const getCommonLineTooltip = (theme) => {
  return {
    trigger: "axis",
    ...(theme === "d"
      ? {
          backgroundColor: "#142349",
          borderWidth: 0,
          textStyle: { color: "#FFFFFF" },
        }
      : {}),
  };
};

/**
 * 隐藏x轴和y轴的线
 */
export const axisLineHide = {
  axisLine: {
    show: false,
  },
};

/**
 * 显示x轴和y轴的线
 * @param {string} color 颜色
 */
export const axisLineShow = (color) => ({
  axisLine: { show: true, lineStyle: { color } },
});

/**
 * 隐藏x轴和y轴的标签
 */
export const axisLabelHide = {
  axisLabel: {
    show: false,
  },
};

/**
 * 显示x轴和y轴的标签
 * @param {string} color 颜色
 */
export const axisLabelShow = (color) => ({ axisLabel: { color } });

/**
 * 隐藏x轴和y轴的刻度
 */
export const axisTickHide = {
  axisTick: {
    show: false,
  },
};

/**
 * 隐藏x轴和y轴的网格线
 */
export const splitLineHide = {
  splitLine: {
    show: false,
  },
};

/**
 * 显示x轴和y轴的网格线
 * @param {string} color 颜色
 * @param {string} type 类型
 */
export const splitLineShow = (color, type = "solid") => ({
  splitLine: {
    lineStyle: {
      color,
      type,
    },
  },
});

/**
 * item无事件（无鼠标交互效果，即无移入高亮，无tooltip展示）
 */
export const itemNoneEvent = {
  label: {
    show: false,
  },
  emphasis: {
    disabled: true,
  },
  tooltip: {
    show: false,
  },
};

/**
 * 创建渐变色（从上到下）
 * @param {string} Tc 垂直方向，上方渐变颜色
 * @param {string} Bc 垂直方向，下方渐变颜色
 * @returns
 */
export const getCommonLinearT2B = (Tc, Bc) => {
  return {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      { offset: 0, color: Tc },
      { offset: 1, color: Bc },
    ],
    global: false, // 缺省为 false
  };
};

/**
 * 创建折线的区域渐变色（areaStyle）
 * @param {string} color 颜色
 * @returns
 */
export const getCommonLinearT2B4Line = (color) => {
  return {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      { offset: 0, color: color + "4D" }, // 30%
      { offset: 1, color: color + "00" }, // 0%
    ],
    global: false, // 缺省为 false
  };
};
/**
 * 创建渐变色（从左到右）
 * @param {string} Lc 水平方向，左方渐变颜色
 * @param {string} Rc 水平方向，右方渐变颜色
 * @returns
 */
export const getCommonLinearL2R = (Lc, Rc) => {
  return {
    type: "linear",
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      { offset: 0, color: Lc },
      { offset: 1, color: Rc },
    ],
    global: false, // 缺省为 false
  };
};

/**
 * 折线图通用Symbol样式
 */
export const getCommonLineSymbol = {
  symbol: "circle",
  symbolSize: 10,
  showSymbol: false,
  itemStyle: {
    borderColor: "#FFFFFF",
    borderWidth: 3,
  },
};

/**
 * 折线图通用Symbol样式（特殊处理：浅底的要加阴影，不然白色可能会被背景色影响）
 */
export const getCommonLineSymbol4Light = {
  symbol: "circle",
  symbolSize: 10,
  showSymbol: false,
  itemStyle: {
    borderColor: "#FFFFFF",
    borderWidth: 3,
    shadowColor: "#A7B9C2",
    shadowOffsetY: 3,
    shadowBlur: 6,
  },
};

/**
 * 创建自定义系列（饼图外部装饰）
 * @param {*} params renderItem方法的回调参数
 * @param {*} api renderItem方法的回调参数
 */
export const renderItem4Pie = (params, api) => {
  const color = "#6AA4FF7D";
  let x0 = api.getWidth() / 2;
  let y0 = api.getHeight() / 2;
  let r = Math.min(x0, y0) * 0.65;
  return {
    type: "group",
    children: [
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r,
          startAngle: -0.5 * Math.PI,
          endAngle: 1.5 * Math.PI,
        },
        style: {
          stroke: color,
          lineDash: [3, 3],
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
    ],
  };
};

/**
 * 创建自定义系列（饼图外部装饰）
 * @param {*} params renderItem方法的回调参数
 * @param {*} api renderItem方法的回调参数
 */
export const renderItem4Pie2 = (params, api) => {
  const color = "#65FEFE";
  let x0 = api.getWidth() / 2;
  let y0 = api.getHeight() / 2;
  const r = Math.min(x0, y0);
  const r1 = r * 0.7;
  const r2 = r * 0.78;
  return {
    type: "group",
    children: [
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: -0.81 * Math.PI,
          endAngle: -0.3 * Math.PI,
        },
        style: {
          stroke: color + "5D",
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0 + r1 * Math.cos(-0.81 * Math.PI),
          cy: y0 + r1 * Math.sin(-0.81 * Math.PI),
          r: 2,
        },
        style: {
          stroke: color,
          fill: color,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: 0.15 * Math.PI,
          endAngle: 0.66 * Math.PI,
        },
        style: {
          stroke: color + "5D",
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0 + r1 * Math.cos(0.15 * Math.PI),
          cy: y0 + r1 * Math.sin(0.15 * Math.PI),
          r: 2,
        },
        style: {
          stroke: color,
          fill: color,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r2,
          startAngle: -0.5 * Math.PI,
          endAngle: 0.2 * Math.PI,
        },
        style: {
          stroke: color + "5D",
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0 + r2 * Math.cos(-0.5 * Math.PI),
          cy: y0 + r2 * Math.sin(-0.5 * Math.PI),
          r: 2,
        },
        style: {
          stroke: color,
          fill: color,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r2,
          startAngle: 0.55 * Math.PI,
          endAngle: 1.25 * Math.PI,
        },
        style: {
          stroke: color + "5D",
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0 + r2 * Math.cos(0.55 * Math.PI),
          cy: y0 + r2 * Math.sin(0.55 * Math.PI),
          r: 2,
        },
        style: {
          stroke: color,
          fill: color,
        },
        silent: true,
      },
    ],
  };
};

/**
 * 创建自定义系列（饼图外部装饰）
 * @param {*} params renderItem方法的回调参数
 * @param {*} api renderItem方法的回调参数
 */
export const renderItem4Pie3 = (params, api) => {
  const color = "#65FEFE";
  const color2 = "#A1BFC69D";
  let x0 = api.getWidth() / 2;
  let y0 = api.getHeight() / 2;
  const r = Math.min(x0, y0);
  const r1 = r * 0.75;
  const r2 = r * 0.78;
  return {
    type: "group",
    children: [
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: -0.3 * Math.PI,
          endAngle: 0.3 * Math.PI,
        },
        style: {
          stroke: color + "5D",
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: 0.7 * Math.PI,
          endAngle: 1.3 * Math.PI,
        },
        style: {
          stroke: color + "5D",
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: -0.3 * Math.PI,
          endAngle: -0.2 * Math.PI,
        },
        style: {
          stroke: color2,
          fill: "transparent",
          lineWidth: 2,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: 0.2 * Math.PI,
          endAngle: 0.3 * Math.PI,
        },
        style: {
          stroke: color2,
          fill: "transparent",
          lineWidth: 2,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: 0.7 * Math.PI,
          endAngle: 0.8 * Math.PI,
        },
        style: {
          stroke: color2,
          fill: "transparent",
          lineWidth: 2,
        },
        silent: true,
      },
      {
        type: "arc",
        shape: {
          cx: x0,
          cy: y0,
          r: r1,
          startAngle: 1.2 * Math.PI,
          endAngle: 1.3 * Math.PI,
        },
        style: {
          stroke: color2,
          fill: "transparent",
          lineWidth: 2,
        },
        silent: true,
      },
    ],
  };
};

import * as ringBg from "../base64/pie";

/**
 * 创建自定义系列（饼图外部装饰）
 * @param {*} params renderItem方法的回调参数
 * @param {*} api renderItem方法的回调参数
 */
export const renderItem4Pie4 = (params, api) => {
  let x0 = api.getWidth() / 2;
  let y0 = api.getHeight() / 2;
  const r1 = Math.min(x0, y0) / 1.8;
  const r2 = Math.min(x0, y0) * 1.6;
  return {
    type: "group",
    children: [
      {
        type: "image",
        style: {
          image: ringBg.innerRing,
          x: x0 - r1 / 2,
          y: y0 - r1 / 2,
          width: r1,
          height: r1,
        },
        silent: true,
      },
      {
        type: "image",
        style: {
          image: ringBg.outerRing,
          x: x0 - r2 / 2,
          y: y0 - r2 / 2,
          width: r2,
          height: r2,
        },
        silent: true,
      },
    ],
  };
};
