// src/pages/Usuarios.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    codigo: "",
    contrasena: "",
    rol: "usuario",
  });

  const fetchUsuarios = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/usuarios");
      setUsuarios(res.data);
    } catch (error) {
      console.error("❌ Error al obtener usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUsuario = async () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.codigo || !nuevoUsuario.contrasena) {
      alert("⚠️ Completa todos los campos antes de agregar.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/usuarios", nuevoUsuario);
      alert("✅ Usuario agregado correctamente.");
      setNuevoUsuario({
        nombre: "",
        codigo: "",
        contrasena: "",
        rol: "usuario",
      });
      fetchUsuarios();
    } catch (error) {
      console.error("❌ Error al agregar usuario:", error);
      alert("❌ Error al agregar usuario.");
    }
  };

  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("❌ Error al eliminar usuario:", error);
    }
  };

  const handleLogout = () => {
    // Aquí puedes limpiar el token y redirigir al login si es necesario
    window.location.href = "/";
  };

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <h2>Panel de Administración</h2>
        <ul>
          <li onClick={() => window.location.href = "/admin"}>
            <i className="fas fa-book"></i> Libros
          </li>
          <li onClick={() => window.location.href = "/usuarios"}>
            <i className="fas fa-users"></i> Usuarios
          </li>
          <li onClick={() => window.location.href = "/reservas"}>
            <i className="fas fa-calendar-check"></i> Reservas
          </li>
          <li onClick={handleLogout} style={{ cursor: "pointer" }}>
            <i className="fas fa-sign-out-alt"></i> Cerrar sesión
          </li>
        </ul>
      </aside>

      <div className="admin-content">
        <h1>Gestión de Usuarios</h1>

        <div className="form-agregar">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoUsuario.nombre}
            onChange={handleChange}
          />
          <input
            type="text"
            name="codigo"
            placeholder="Código"
            value={nuevoUsuario.codigo}
            onChange={handleChange}
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={nuevoUsuario.contrasena}
            onChange={handleChange}
          />
          <select
            name="rol"
            value={nuevoUsuario.rol}
            onChange={handleChange}
          >
            <option value="usuario">Usuario</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleAddUsuario}>Agregar Usuario</button>
        </div>

        {usuarios.length === 0 ? (
          <p>No hay usuarios registrados.</p>
        ) : (
          <table className="tabla-libros">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Código</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.codigo}</td>
                  <td>{usuario.rol}</td>
                  <td>
                    <button
                      className="boton-eliminar"
                      onClick={() => handleEliminar(usuario.id)}
                    >
                      <i className="fas fa-trash-alt"></i> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Usuarios;
