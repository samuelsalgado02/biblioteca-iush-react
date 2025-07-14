import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import "../App.css";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="home-container">
      <h2 className="titulo-principal">⭐ Mis Libros Favoritos</h2>

      {favorites.length === 0 ? (
        <p className="mensaje-vacio">No has agregado libros a favoritos.</p>
      ) : (
        <div className="contenedor-libros">
          {favorites.map((libro) => (
            <div key={libro.id} className="card-libro">
              <img
                src={libro.imagen}
                alt={libro.titulo}
                className="imagen-libro"
              />
              <h3>{libro.titulo}</h3>
              <p>{libro.autor}</p>
              <button onClick={() => removeFavorite(libro.id)}>❌ Quitar</button>
              <br />
              <Link to={`/detalle/${libro.id}`}>Ver Detalle</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
