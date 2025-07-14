import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#0a3d62",
      color: "white",
      padding: "10px 20px"
    }}>
      <h2>📚 Biblioteca IUSH</h2>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
        <Link to="/favoritos" style={{ color: "white", textDecoration: "none" }}>⭐ Favoritos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
