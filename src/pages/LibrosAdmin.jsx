// src/pages/LibrosAdmin.jsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <--- IMPORTANTE
import { getLibros, deleteLibro } from "../api";
import "../App.css";

function Admin() {
  const [libros, setLibros] = useState([]);
  const navigate = useNavigate(); // <--- NECESARIO PARA REDIRECCIONAR

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const data = await getLibros();
        setLibros(data);
      } catch (error) {
        console.error("Error al obtener libros:", error);
      }
    };
    fetchLibros();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("¿Está seguro de eliminar este libro?")) return;
    try {
      await deleteLibro(id);
      setLibros(libros.filter((libro) => libro.id !== id));
    } catch (error) {
      console.error("Error al eliminar libro:", error);
    }
  };

  // ✅ NUEVO: Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // o sessionStorage según uses
    navigate("/"); // redirige al login
  };

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <h2>Panel de Administración</h2>
        <ul>
          <li><i className="fas fa-book"></i> Libros</li>
          <li onClick={() => window.location.href = "/usuarios"}>
            <i className="fas fa-users"></i> Usuarios
          </li>
          <li><i className="fas fa-chart-bar"></i> Estadísticas</li>
          <li onClick={handleLogout} style={{ cursor: "pointer" }}>
            <i className="fas fa-sign-out-alt"></i> Cerrar sesión
          </li>
        </ul>
      </aside>

      <main className="admin-content">
        <h1>Lista de Libros</h1>
        {libros.length === 0 ? (
          <p>No hay libros registrados.</p>
        ) : (
          <table className="tabla-libros">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoría</th>
                <th>Idioma</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {libros.map((libro) => (
                <tr key={libro.id}>
                  <td>
                    <img
                      src={libro.imagen}
                      alt={libro.titulo}
                      className="miniatura-libro"
                    />
                  </td>
                  <td>{libro.titulo}</td>
                  <td>{libro.autor}</td>
                  <td>{libro.categoria}</td>
                  <td>{libro.idioma}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(libro.id)}
                      className="boton-eliminar"
                    >
                      <i className="fas fa-trash-alt"></i> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

export default Admin;
