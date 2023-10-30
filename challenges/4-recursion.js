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

function deeplyEquals(input1, input2) {
  // Base case: Check for primitive data types
  if (typeof input1 !== "object" && typeof input2 !== "object")
    return input1 === input2;

  // Recursive case: Arrays
  if (Array.isArray(input1) && Array.isArray(input2)) {
    if (input1.length !== input2.length) return false;
    for (let i = 0; i < input1.length; i++) {
      if (!deeplyEquals(input1[i], input2[i])) return false;
    }
    return true;
  }
  // Recursive case: Objects
  if (typeof input1 === "object" && typeof input2 === "object") {
    const keys1 = Object.keys(input1);
    const keys2 = Object.keys(input2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!deeplyEquals(input1[key], input2[key])) return false;
    }
    return true;
  }
  // If none of the above conditions are met
  return false;
}

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
