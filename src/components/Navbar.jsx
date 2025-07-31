import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Obtenemos el rol desde localStorage
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

  // 🔒 Ocultamos la barra si es admin
  if (usuario?.rol === "admin") return null;

  // 🔒 Ocultamos enlaces si estamos en /login o /admin
  const ocultarEnlaces = location.pathname === "/" || location.pathname === "/admin" || location.pathname === "/usuarios" || location.pathname === "/reservas";
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioLogueado");
    navigate("/");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1A237E",
        padding: "10px 20px",
      }}
    >
      {/* Logo y título */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://yt3.ggpht.com/a/AATXAJxpNCM6wOnN_v0Us7BVRamfzOAgvziBSBNa2A=s900-c-k-c0xffffffff-no-rj-mo"
          alt="Logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "15px",
            objectFit: "cover",
          }}
        />
        <h1 style={{ color: "#FFFFFF", margin: 0 }}>Biblioteca Virtual</h1>
      </div>

      {/* Enlaces: se ocultan si estamos en /login o /admin */}
      {!ocultarEnlaces && (
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Link
            to="/usuario/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              fontFamily: "inherit",
            }}
          >
            Inicio
          </Link>
          <Link
            to="/favoritos"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              fontFamily: "inherit",
            }}
          >
            Favoritos
          </Link>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "inherit",
            }}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;