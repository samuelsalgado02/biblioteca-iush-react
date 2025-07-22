import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { getLibros } from "../api"; // importar conexión backend
import "../App.css";

function Usuario() {
  const [busquedaTitulo, setBusquedaTitulo] = useState("");
  const [busquedaAutor, setBusquedaAutor] = useState("");
  const [orden, setOrden] = useState("az");

  const [categoria, setCategoria] = useState("");
  const [idioma, setIdioma] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [nivel, setNivel] = useState("");
  const [etiqueta, setEtiqueta] = useState("");

  const [libros, setLibros] = useState([]); // se cargan del backend

  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const librosDesdeBackend = await getLibros();
        setLibros(librosDesdeBackend);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };

    fetchLibros();
  }, []);

  const librosFiltrados = libros
    .filter((libro) =>
      libro.titulo?.toLowerCase().includes(busquedaTitulo.toLowerCase())
    )
    .filter((libro) =>
      libro.autor?.toLowerCase().includes(busquedaAutor.toLowerCase())
    )
    .filter((libro) => (categoria ? libro.categoria === categoria : true))
    .filter((libro) => (idioma ? libro.idioma === idioma : true))
    .filter((libro) =>
      disponibilidad ? libro.disponibilidad === disponibilidad : true
    )
    .filter((libro) => (nivel ? libro.nivel === nivel : true))
    .filter((libro) =>
      etiqueta
        ? (Array.isArray(libro.etiquetas)
            ? libro.etiquetas
            : JSON.parse(libro.etiquetas || "[]")
          ).some((e) =>
            e.toLowerCase().includes(etiqueta.toLowerCase())
          )
        : true
    )
    .sort((a, b) =>
      orden === "az"
        ? a.titulo.localeCompare(b.titulo)
        : b.titulo.localeCompare(a.titulo)
    );

  return (
    <div className="home-wrapper">
      <aside className="filtro-lateral visible">
        <h3>🔍 Búsqueda avanzada</h3>

        <input
          type="text"
          placeholder="Buscar por autor"
          value={busquedaAutor}
          onChange={(e) => setBusquedaAutor(e.target.value)}
          className="input-busqueda"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="select-orden"
        >
          <option value="">Todas las categorías</option>
          <option value="programacion">Programación</option>
          <option value="novela">Novela</option>
          <option value="historia">Historia</option>
        </select>

        <select
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
          className="select-orden"
        >
          <option value="">Todos los idiomas</option>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
        </select>

        <select
          value={disponibilidad}
          onChange={(e) => setDisponibilidad(e.target.value)}
          className="select-orden"
        >
          <option value="">Todas</option>
          <option value="disponible">Disponible</option>
          <option value="prestado">Prestado</option>
        </select>

        <select
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
          className="select-orden"
        >
          <option value="">Todos los niveles</option>
          <option value="infantil">Infantil</option>
          <option value="juvenil">Juvenil</option>
          <option value="universitario">Universitario</option>
          <option value="profesional">Profesional</option>
          <option value="general">General</option>
        </select>

        <input
          type="text"
          placeholder="Palabra clave / etiqueta"
          value={etiqueta}
          onChange={(e) => setEtiqueta(e.target.value)}
          className="input-busqueda"
        />

        <label>Ordenar por título:</label>
        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="select-orden"
        >
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </aside>

      <main className="contenido-principal">
        <h1 className="titulo-principal">Biblioteca IUSH</h1>

        <input
          type="text"
          placeholder="Buscar libro por título..."
          value={busquedaTitulo}
          onChange={(e) => setBusquedaTitulo(e.target.value)}
          className="input-busqueda"
        />

        {librosFiltrados.length === 0 ? (
          <p className="mensaje-vacio">No se encontraron libros.</p>
        ) : (
          <div className="contenedor-libros">
            {librosFiltrados.map((libro) => (
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
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Usuario;
