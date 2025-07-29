import { Log } from "@/utils/index"; 

/**
 * 将透明度百分比转化为对应格式的颜色值
 * @param {string} color 颜色值
 * @param {number} [opacity=1] 透明度
 * @returns {string} 转换后的颜色值
 */
export function transformColorAlpha(color, opacity = 1) {
  // 校验透明度是否在 0-1 之间
  if (opacity < 0 || opacity > 1) {
    Log.error("透明度必须在 0-1 之间");
    return color;
  }

  // 处理十六进制颜色值
  if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
    if (color.length === 4) {
      color = color.replace(/^#/, "");
      color = "#" + color.split("").map((v) => v + v).join("");
    }
    const hexAlpha = Math.round(opacity * 255).toString(16).padStart(2, "0");
    return `${color}${hexAlpha}`;
  }
  
  // 处理 RGB 颜色值
  const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i);
  if (rgbMatch) {
    return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
  }

  // 处理 RGBA 颜色值
  const rgbaMatch = color.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/i);
  if (rgbaMatch) {
    return `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${opacity})`;
  }

  // 处理 HSL 颜色值
  const hslMatch = color.match(/^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/i);
  if (hslMatch) {
    return `hsla(${hslMatch[1]}, ${hslMatch[2]}%, ${hslMatch[3]}%, ${opacity})`;
  }

  // 处理 HSLA 颜色值
  const hslaMatch = color.match(/^hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*([\d.]+)\)$/i);
  if (hslaMatch) {
    return `hsla(${hslaMatch[1]}, ${hslaMatch[2]}%, ${hslaMatch[3]}%, ${opacity})`;
  }

  Log.error("不支持的颜色格式");
  return color;
}
