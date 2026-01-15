import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dynamic JSON Configuration Renderer</h1>
      <p>
        A data-driven React application that renders editable UI forms
        directly from backend JSON configuration.
      </p>

      <button onClick={() => navigate("/editor")}>
        Open Configuration Editor
      </button>
    </div>
  );
}
