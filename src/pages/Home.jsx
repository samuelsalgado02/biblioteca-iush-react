import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import libros from "../libros";
import { FavoritesContext } from "../context/FavoritesContext";

function Home() {
  const [busqueda, setBusqueda] = useState("");
  const { addFavorite } = useContext(FavoritesContext);

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Biblioteca IUSH</h1>

      <input
        type="text"
        placeholder="Buscar libro..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "200px" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {librosFiltrados.map((libro) => (
          <div
            key={libro.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "180px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={libro.imagen}
              alt={libro.titulo}
              style={{ width: "100%" }}
            />
            <h3>{libro.titulo}</h3>
            <p>{libro.autor}</p>
            <button onClick={() => addFavorite(libro)}>⭐ Favorito</button>
            <br />
            <Link to={`/detalle/${libro.id}`}>Ver Detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;