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

  // Obtener usuarios del backend
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

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setNuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ AGREGADO: handleAddUsuario
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

  // Eliminar usuario
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("❌ Error al eliminar usuario:", error);
    }
  };

  return (
    <div className="admin-content">
      <h1>Gestión de Usuarios</h1>

      {/* Formulario para agregar usuario */}
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
        {/* ✅ Cambiar onClick al nuevo método */}
        <button onClick={handleAddUsuario}>Agregar Usuario</button>
      </div>

      {/* Tabla de usuarios */}
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
  );
}

export default Usuarios;
