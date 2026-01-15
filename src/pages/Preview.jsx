export default function Preview() {
  const data = localStorage.getItem("finalConfig");

  return (
    <div>
      <h2>Updated Configuration</h2>

      <pre
        style={{
          background: "#111827",
          color: "#e5e7eb",
          padding: 20,
          borderRadius: 6,
          overflowX: "auto"
        }}
      >
        {data}
      </pre>
    </div>
  );
}
