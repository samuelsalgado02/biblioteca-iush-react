import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Admin from "./pages/LibrosAdmin";
import Usuario from './pages/Usuario';
import Usuarios from './pages/Usuarios';
import Login from './pages/login';
import Footer from "./components/Footer"; // <-- NUEVO
import Reservas from "./pages/Reservas"; // ajusta el path si es necesario



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
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/reservas" element={<Reservas />} />

      </Routes>
      <Footer />  {/* <-- NUEVO: Aquí se agrega el Footer */}
    </>
  );
}

export default App;

