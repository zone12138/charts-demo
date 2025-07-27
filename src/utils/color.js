/**
 * 将透明度百分比转化为 十六进制
 * @param {string} color 颜色值
 * @param {number} opacity 透明度
 * @returns {string} 转换后的颜色值
 */
export function transformColorAlpha(color, opacity) {
  const hexAlpha = Math.round(opacity * 255).toString(16).padStart(2, "0");
  return `${color}${hexAlpha}`;
}
