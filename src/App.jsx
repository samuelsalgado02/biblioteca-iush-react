import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Admin from './pages/Admin';
import Usuario from './pages/Usuario';
import Login from './pages/login';

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
      </Routes>
    </>
  );
}

export default App;
