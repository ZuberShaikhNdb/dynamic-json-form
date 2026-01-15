export function updateValue(obj, path, value) {
  const newObj = structuredClone(obj);
  let current = newObj;

  for (let i = 0; i < path.length - 1; i++) {
    current = current[path[i]];
  }

  current[path[path.length - 1]] = value;
  return newObj;
}
