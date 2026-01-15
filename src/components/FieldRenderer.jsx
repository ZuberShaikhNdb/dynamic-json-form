export default function FieldRenderer({ value, schema, path, onChange }) {
  if (schema.type === "string") {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(path, e.target.value)}
      />
    );
  }

  if (schema.type === "number") {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(path, Number(e.target.value))
        }
      />
    );
  }

  if (schema.type === "boolean") {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) =>
          onChange(path, e.target.checked)
        }
      />
    );
  }

  return null;
}
