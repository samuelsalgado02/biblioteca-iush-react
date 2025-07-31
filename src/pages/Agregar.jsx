import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Agregar() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [anio, setAnio] = useState("");
  const [idioma, setIdioma] = useState("");
  const [disponible, setDisponible] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "libros"), {
        titulo,
        autor,
        categoria,
        anio,
        idioma,
        disponible,
        fechaCreacion: new Date()
      });
      alert("📚 Libro agregado con éxito");
      navigate("/admin"); // Te redirige al panel principal
    } catch (error) {
      console.error("Error al agregar libro:", error);
      alert("❌ Hubo un error al guardar el libro.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Agregar nuevo libro</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Año"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Idioma"
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={disponible}
            onChange={(e) => setDisponible(e.target.checked)}
          />
          Disponible
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
        >
          Guardar libro
        </button>
      </form>
    </div>
  );
}

export default Agregar;
