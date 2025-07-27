import { transformColorAlpha } from "./color";

/**
 * 创建自定义系列（水球图外部装饰）
 * @param {*} params renderItem方法的回调参数
 * @param {*} api renderItem方法的回调参数
 * @param {string} color 颜色（自定义的一个传参，原renderItem中没有）
 */
export const item4lf = (params, api, color) => {
  const style = api.style();
  const usedColor = color || style.fill;
  color = transformColorAlpha(usedColor, 0.7);
  let x0 = api.getWidth() / 2;
  let y0 = api.getHeight() / 2;
  let r = Math.min(x0, y0) * 0.7;
  let point = {
    x: x0 + r * Math.cos(1.25 * Math.PI),
    y: y0 + r * Math.sin(1.25 * Math.PI),
  };
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
          endAngle: 1.25 * Math.PI,
        },
        style: {
          stroke: color,
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: point.x,
          cy: point.y,
          r: 4,
        },
        style: {
          stroke: color,
          fill: usedColor,
        },
        silent: true,
      },
    ],
  };
};

/**
 * 创建自定义系列2（水球图外部装饰）
 * @param {*} params renderItem方法的回调参数
 * @param {*} api renderItem方法的回调参数
 * @param {string} color 颜色（自定义的一个传参，原renderItem中没有）
 */
export const item4lf2 = (params, api, color) => {
  const style = api.style();
  const usedColor = color || style.fill;
  color = transformColorAlpha(usedColor, 0.7);
  let x0 = api.getWidth() / 2;
  let y0 = api.getHeight() / 2;
  let r = Math.min(x0, y0) * 0.7;
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
          lineDash: [3, 4],
          fill: "transparent",
          lineWidth: 1,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0 + r * Math.cos(0.4 * Math.PI),
          cy: y0 + r * Math.sin(0.4 * Math.PI),
          r: 3,
        },
        style: {
          stroke: color,
          fill: usedColor,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0 + r * Math.cos(-0.35 * Math.PI),
          cy: y0 + r * Math.sin(-0.35 * Math.PI),
          r: 3,
        },
        style: {
          stroke: color,
          fill: usedColor,
        },
        silent: true,
      },
      {
        type: "circle",
        shape: {
          cx: x0,
          cy: y0,
          r: Math.min(x0, y0) * 0.8,
        },
        style: {
          fill: transformColorAlpha(usedColor, 0.2),
        },
        silent: true,
      },
    ],
  };
};