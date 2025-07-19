import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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

      {/* Enlaces de navegación */}
      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontFamily: "inherit", // Misma fuente que el h1
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
            fontFamily: "inherit", // Misma fuente
          }}
        >
           Favoritos
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
