export const moveForward = (arr: any[]) => {
  return [...arr.slice(1), arr[0]];
};

export const moveBackward = (arr: any[]) => {
  return [arr[arr.length - 1], ...arr.slice(0, -1)];
};
