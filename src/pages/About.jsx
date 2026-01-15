export default function About() {
  return (
    <div>
      <h2>Design Approach</h2>

      <ul>
        <li>Typed schema is generated dynamically from JSON</li>
        <li>Recursive rendering supports deeply nested structures</li>
        <li>No hardcoded fields or keys</li>
        <li>State updates preserve original JSON shape</li>
      </ul>

      <p>
        This approach allows the UI to scale with evolving backend
        configurations without code changes.
      </p>
    </div>
  );
}
