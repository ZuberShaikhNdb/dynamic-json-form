import { useState } from "react";
import config from "../data/config.json";
import { buildSchema } from "../utils/schemaBuilder";
import { updateValue } from "../utils/updateValue";
import JsonForm from "../components/JsonForm";
import { useNavigate } from "react-router-dom";

export default function Editor() {
  const [formData, setFormData] = useState(config);
  const schema = buildSchema(config);
  const navigate = useNavigate();

  const handleChange = (path, value) => {
    setFormData((prev) => updateValue(prev, path, value));
  };

  const handleSubmit = () => {
    console.log("Final JSON:", formData);
    localStorage.setItem("finalConfig", JSON.stringify(formData, null, 2));
    navigate("/preview");
  };

  return (
    <div>
      <h2>Configuration Editor</h2>

      <JsonForm
        data={formData}
        schema={schema}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit Configuration</button>
    </div>
  );
}
