export function buildSchema(data) {
  if (Array.isArray(data)) {
    return {
      type: "array",
      itemSchema:
        data.length > 0 ? buildSchema(data[0]) : { type: "string" }
    };
  }

  if (typeof data === "object" && data !== null) {
    const fields = {};
    for (const key in data) {
      fields[key] = buildSchema(data[key]);
    }
    return {
      type: "object",
      fields
    };
  }

  return {
    type: typeof data
  };
}
