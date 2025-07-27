const req = require.context(
  "./bar", // 从当前目录开始查找
  true, // 递归查找子目录
  /^(?!\.\/(index|common)\.js$).*\.js$/
);

const allConfigs = {};

req.keys().forEach((key) => {
  const module = req(key);
  // 生成模块名：去除路径前缀和.js后缀，用-替换路径分隔符
  // console.log(key, module.default);
  Object.assign(allConfigs, module.default);
});

console.log(
  `%c[Log]`,
  "color: #00ff; font-weight: 1000; font-family: Microsoft YaHei",
  " ☀『allConfigs』☀ ",
  Object.keys(allConfigs)
);

export default allConfigs 