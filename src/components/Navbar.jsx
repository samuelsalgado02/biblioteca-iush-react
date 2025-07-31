import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "../pages/login";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));

  // Rutas consideradas como "admin"
  const rutasAdmin = ["/admin", "/usuarios", "/librosadmin", "/reservas" , "/login" , "/"];
  const rutaActual = location.pathname.toLowerCase();
  const esRutaAdmin = rutasAdmin.some((ruta) => rutaActual.startsWith(ruta));

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
      {/* 🎯 Siempre mostrar esta parte */}
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

      {/* ❌ Ocultar esta parte si estás en ruta admin */}
      {!esRutaAdmin && (
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

export default Navbar;
