import FieldRenderer from "./FieldRenderer";

export default function JsonForm({
  data,
  schema,
  onChange,
  path = []
}) {
  // OBJECT
  if (schema.type === "object") {
    return (
      <div style={{ marginLeft: 20 }}>
        {Object.keys(schema.fields).map((key) => {
          const fieldSchema = schema.fields[key];
          const fieldValue = data[key];
          const fieldPath = [...path, key];

          return (
            <div key={key} style={{ marginBottom: 15 }}>
              {fieldSchema.type === "object" ||
              fieldSchema.type === "array" ? (
                <>
                  <h4>{key}</h4>
                  <JsonForm
                    data={fieldValue}
                    schema={fieldSchema}
                    onChange={onChange}
                    path={fieldPath}
                  />
                </>
              ) : (
                <>
                  <label><strong>{key}</strong></label>
                  <FieldRenderer
                    value={fieldValue}
                    schema={fieldSchema}
                    path={fieldPath}
                    onChange={onChange}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // ARRAY
  if (schema.type === "array") {
    return (
      <div style={{ marginLeft: 20 }}>
        {data.map((item, index) => {
          const itemPath = [...path, index];

          return (
            <div key={index} style={{ marginBottom: 10 }}>
              <label>[{index}]</label>
              <FieldRenderer
                value={item}
                schema={schema.itemSchema}
                path={itemPath}
                onChange={onChange}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}
