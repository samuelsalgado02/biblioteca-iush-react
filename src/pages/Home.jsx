import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import libros from "../libros";
import { FavoritesContext } from "../context/FavoritesContext";
import "../App.css";

function Home() {
  const [busqueda, setBusqueda] = useState("");
  const { addFavorite } = useContext(FavoritesContext);

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="titulo-principal">📚 Biblioteca IUSH</h1>

      <input
        type="text"
        placeholder="Buscar libro..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input-busqueda"
      />

      <div className="contenedor-libros">
        {librosFiltrados.length === 0 ? (
          <p className="mensaje-vacio">No se encontraron libros.</p>
        ) : (
          librosFiltrados.map((libro) => (
            <div key={libro.id} className="card-libro">
              <img
                src={libro.imagen}
                alt={libro.titulo}
                className="imagen-libro"
              />
              <h3>{libro.titulo}</h3>
              <p>{libro.autor}</p>
              <button onClick={() => addFavorite(libro)}>⭐ Favorito</button>
              <br />
              <Link to={`/detalle/${libro.id}`}>Ver Detalle</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
