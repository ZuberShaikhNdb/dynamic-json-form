import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <nav
        style={{
          background: "#ffffff",
          padding: "12px 20px",
          borderBottom: "1px solid #e5e7eb"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/preview">Preview</Link>
        <Link to="/about">About</Link>
      </nav>

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px"
        }}
      >
        {children}
      </main>
    </>
  );
}
