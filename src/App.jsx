import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;

