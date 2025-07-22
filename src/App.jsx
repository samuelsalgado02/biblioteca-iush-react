// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Admin from './pages/Admin';
import Usuario from './pages/Usuario';
import Login from './pages/login';
import Footer from "./components/Footer"; // <-- NUEVO
import Usuarios from './pages/Usuarios'; // <-- NUEVO

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />              {/* Página de inicio */}
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarios" element={<Usuarios />} />   {/* <-- NUEVO: ruta de gestión de usuarios */}
      </Routes>
      <Footer />  {/* Footer persistente en todas las páginas */}
    </>
  );
}

export default App;
