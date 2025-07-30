import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function Login() {
  const { login } = useAuth();
  const [codigo, setCodigo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!codigo || !contrasena) {
      alert('⚠️ Completa todos los campos antes de continuar.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/usuarios/login', {
        codigo,
        contrasena,
      });

      const { rol, nombre, usuario_id } = response.data;

      // Guardamos los datos del usuario en localStorage
      const usuarioEncontrado = { nombre, rol, usuario_id };
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

      // También los almacenamos en el contexto de autenticación
      login(nombre, rol, usuario_id);

      // Redirección según el rol
      if (rol === 'admin') {
        alert(`✅ Bienvenido administrador ${nombre}`);
        navigate('/admin');
      } else if (rol === 'usuario') {
        alert(`✅ Bienvenido ${nombre}`);
        navigate('/usuario');
      } else {
        alert('⚠️ Rol no reconocido. Contacta a soporte.');
      }

    } catch (error) {
      console.error('❌ Error al iniciar sesión:', error);

      if (error.response && error.response.status === 401) {
        alert('❌ Código o contraseña incorrectos.');
      } else if (error.response) {
        alert(`❌ Error: ${error.response.data.error}`);
      } else {
        alert('❌ Error de conexión con el servidor.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Código de estudiante"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          /><br />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
