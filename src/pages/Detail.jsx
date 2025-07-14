import { useParams, useNavigate } from "react-router-dom";
import libros from "../libros";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const libro = libros.find((l) => l.id === parseInt(id));

  if (!libro) {
    return <h2>Libro no encontrado</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)}>⬅️ Volver</button>
      <h2>{libro.titulo}</h2>
      <img src={libro.imagen} alt={libro.titulo} />
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Descripción:</strong> Próximamente descripción detallada...</p>
    </div>
  );
}

export default Detail;