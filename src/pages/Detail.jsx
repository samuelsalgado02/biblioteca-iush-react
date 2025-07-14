import { useParams, useNavigate } from "react-router-dom";
import libros from "../libros";
import "../App.css";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const libro = libros.find((l) => l.id === parseInt(id));

  if (!libro) {
    return <h2 className="mensaje-vacio">📕 Libro no encontrado</h2>;
  }

  return (
    <div className="home-container">
      <button className="boton-volver" onClick={() => navigate(-1)}>⬅️ Volver</button>

      <div className="detalle-libro">
        <img src={libro.imagen} alt={libro.titulo} className="imagen-detalle" />
        <div className="info-detalle">
          <h2>{libro.titulo}</h2>
          <p><strong>Autor:</strong> {libro.autor}</p>
          <p><strong>Descripción:</strong> Próximamente descripción detallada...</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
