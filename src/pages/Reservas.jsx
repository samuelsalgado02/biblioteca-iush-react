import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reservas = () => {
  const [reservas, setReservas] = useState([]);
  const [usuariosMap, setUsuariosMap] = useState({});
  const [librosMap, setLibrosMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formatearFecha = (fecha) => {
    if (!fecha) return "—";
    const d = new Date(fecha);
    if (isNaN(d.getTime())) return "—";
    return d.toLocaleDateString();
  };

  const fetchAll = async () => {
    try {
      setLoading(true);
      const [resPrestamos, resUsuarios, resLibros] = await Promise.all([
        axios.get("http://localhost:3000/api/prestamos"),
        axios.get("http://localhost:3000/api/usuarios"),
        axios.get("http://localhost:3000/api/libros"),
      ]);

      const usuariosById = {};
      resUsuarios.data.forEach((u) => {
        usuariosById[u.id || u.usuario_id || u.codigo] = u;
        usuariosById[u.id] = u;
      });

      const librosById = {};
      resLibros.data.forEach((l) => {
        librosById[l.id] = l;
      });

      setUsuariosMap(usuariosById);
      setLibrosMap(librosById);
      setReservas(resPrestamos.data);
    } catch (e) {
      console.error("Error cargando datos de reservas:", e);
      setError("No se pudo cargar las reservas. Revisa la consola.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuarioLogueado");
    navigate("/");
  };

  const nombreUsuario = (usuario_id) => {
  if (typeof usuario_id === "object" && usuario_id !== null) {
    return usuario_id.nombre || "Desconocido";
  }
  const u = usuariosMap[usuario_id] || {};
  return u.nombre || "Desconocido";
  };

  const tituloLibro = (libro_id) => {
  if (typeof libro_id === "object" && libro_id !== null) {
    return libro_id.titulo || "Desconocido";
  }
  const l = librosMap[libro_id] || {};
  return l.titulo || "Desconocido";
};



  const eliminarReserva = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar esta reserva?");
    if (!confirmar) return;

    try {
      await axios.delete(`http://localhost:3000/api/prestamos/${id}`);
      setReservas((prev) => prev.filter((r) => r.id !== id && r._id !== id));
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
      alert("No se pudo eliminar la reserva.");
    }
  };

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <h2>Panel de Administración</h2>
        <ul>
          <li onClick={() => navigate("/admin")}>
            <i className="fas fa-book"></i> Libros
          </li>
          <li onClick={() => navigate("/usuarios")}>
            <i className="fas fa-users"></i> Usuarios
          </li>
          <li onClick={() => navigate("/reservas")}>
            <i className="fas fa-calendar-check"></i> Reservas
          </li>
          <li onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Cerrar sesión
          </li>
        </ul>
      </aside>

      <div className="reservas-container">
        <header className="reservas-header">
          <h2>Lista de Reservas</h2>
        </header>

        {loading ? (
          <p>Cargando reservas...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : reservas.length === 0 ? (
          <p>No hay reservas registradas.</p>
        ) : (
          <div className="tabla-scroll">
            <table className="tabla-reservas">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Usuario</th>
                  <th>Libro</th>
                  <th>Fecha de Préstamo</th>
                  <th>Fecha de Devolución</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {reservas.map((reserva, index) => (
                  <tr key={index}>
                    <td>{reserva.id || reserva._id}</td>
                    <td>{nombreUsuario(reserva.usuario_id)}</td>
                    <td>{tituloLibro(reserva.libro_id)}</td>
                    <td>{formatearFecha(reserva.fecha_inicio)}</td>
                    <td>{formatearFecha(reserva.fecha_fin)}</td>
                    <td>
                      <button
                        className="btn-eliminar"
                        onClick={() => eliminarReserva(reserva.id || reserva._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservas;
