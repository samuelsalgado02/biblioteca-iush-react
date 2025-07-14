import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
      <img src={book.imagen} alt={book.titulo} style={{ width: "100%" }} />
      <h3>{book.titulo}</h3>
      <p>{book.autor}</p>
      <Link to={`/detalle/${book.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
}

export default BookCard;