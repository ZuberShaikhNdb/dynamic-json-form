import { useState } from "react";
import config from "./data/config.json";
import { buildSchema } from "./utils/schemaBuilder";
import { updateValue } from "./utils/updateValue";
import JsonForm from "./components/JsonForm";

function App() {
  const [formData, setFormData] = useState(config);
  const schema = buildSchema(config);

  const handleChange = (path, value) => {
    setFormData((prev) => updateValue(prev, path, value));
  };

  const handleSubmit = () => {
    console.log("Updated JSON:", formData);
    alert("Check console for updated JSON");
  };

  return (
    <div>
      <h2>Dynamic JSON Configuration Editor</h2>

      <JsonForm
        data={formData}
        schema={schema}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
