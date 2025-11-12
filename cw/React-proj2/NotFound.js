import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const loc = useLocation();
  const navigate = useNavigate();

  console.log(loc.pathname);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found 🚫</h1>
      <p>The page you’re looking for doesn’t exist.</p>

      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "20px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Go Back Home
      </button>
    </div>
  );
}
