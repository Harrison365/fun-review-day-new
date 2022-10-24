const deepEntries = (obj) => {
  const entries = [];
  if (!Object.keys(obj).length) return entries;
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "object") entries.push([key, deepEntries(value)]);
    else entries.push([key, value]);
  }
  return entries;
};

const deeplyEquals = () => {};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
