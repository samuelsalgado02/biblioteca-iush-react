import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>⭐ Mis Libros Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No has agregado libros a favoritos.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {favorites.map((libro) => (
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
              <img src={libro.imagen} alt={libro.titulo} style={{ width: "100%" }} />
              <h3>{libro.titulo}</h3>
              <p>{libro.autor}</p>
              <button onClick={() => removeFavorite(libro.id)}>❌ Quitar</button> <br />
              <Link to={`/detalle/${libro.id}`}>Ver Detalle</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;