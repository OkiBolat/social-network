export const isContains = (target, value) => {
  const targetStr = String(target);

  return targetStr.includes(value);
};


export const isEqual = (target, value) => {
  const targetStr = String(target);

  return targetStr === value;
}

export const isBigger = (target, value) => {
  if (isNaN(Number(target)) || isNaN(Number(value))) return target > value;
  return Number(target) > Number(value);
}

export const isLess = (target, value) => {
  if (isNaN(Number(target)) || isNaN(Number(value))) return target < value;
  debugger
  return Number(target) < Number(value);
}

