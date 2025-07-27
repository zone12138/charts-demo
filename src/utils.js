/**
 * 检查属性是否为事件属性
 * @param {string} key 属性名
 * @returns {boolean} 是否为事件属性
 */
export const isOn = (key) => /^on[^a-z]/.test(key);

/**
 * 移除对象中的事件属性
 * @param {object} attrs 属性对象
 * @returns {object} 移除事件属性后的对象
 */
export const omitOn = (attrs) => {
  const res = {};
  for (const key in attrs) {
    if (!isOn(key)) {
      res[key] = attrs[key];
    }
  }
  return res;
};

const logType = {
  error: "red",
  info: "gray",
  warning: "orange",
};
/**
 * 控制台日志打印工厂函数
 * @param {string} type 日志类型
 * @param  {...any} args 日志参数
 */
export function logFactory(type, ...args) {
  console.log(
    `%cdfcharts ${type} %c${args.join(' ')}`,
    `background: ${logType[type]}; color: #fff; padding: 3px;border-radius: 3px 0 0 3px;`,
    `border: 1px solid ${logType[type]}; padding: 2px 6px;border-radius: 0 3px 3px 0;`
  );
}

/**
 * 控制台日志打印工具类
 * 日志类型：error、info、warning
 */
export const Log = {
  error: (...args) => logFactory("error", ...args),
  info: (...args) => logFactory("info", ...args),
  warning: (...args) => logFactory("warning", ...args),
};
