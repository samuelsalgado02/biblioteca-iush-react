import { useParams, useNavigate } from "react-router-dom";
import libros from "../libros";
import "../App.css";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const libro = libros.find((l) => l.id.toString() === id);

  const [reserva, setReserva] = useState(null);
  const [reservando, setReservando] = useState(false);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/prestamos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.fecha_inicio && data?.fecha_fin) {
          setReserva(data);
        }
      })
      .catch((err) => console.error("Error al consultar reserva:", err));
  }, [id]);

  const manejarReserva = async () => {
    if (!usuario) {
      alert("❌ Debes iniciar sesión para reservar.");
      return;
    }

    if (!fechaInicio || !fechaFin) {
      alert("⚠️ Por favor selecciona ambas fechas.");
      return;
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // eliminar hora para comparar solo fecha

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    if (inicio < hoy) {
      alert("❌ No puedes reservar en una fecha que ya pasó.");
      return;
    }

    const diffDias = (fin - inicio) / (1000 * 60 * 60 * 24);
    if (diffDias < 0 || diffDias > 7) {
      alert("⚠️ Solo puedes reservar entre 1 y 7 días.");
      return;
    }

    setReservando(true);

    const datosReserva = {
      usuario_id: usuario.id,
      libro_id: parseInt(id),
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
    };

    try {
      const resDisponibilidad = await fetch(
        "http://localhost:3000/api/prestamos/verificar-disponibilidad",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datosReserva),
        }
      );

      const disponible = await resDisponibilidad.json();

      if (!disponible.disponible) {
        alert("❌ Este libro ya está reservado en ese rango de fechas.");
        return;
      }

      const res = await fetch("http://localhost:3000/api/prestamos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosReserva),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.mensaje || "Error desconocido");
      }

      const resultado = await res.json();

      setReserva({
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin,
      });

      alert("✅ Reserva realizada con éxito");
    } catch (err) {
      console.error("❌ Error al reservar:", err);
      alert("❌ No se pudo reservar el libro");
    } finally {
      setReservando(false);
    }
  };

  return (
    <div className="home-container">
      <button className="boton-volver" onClick={() => navigate(-1)}>
        ⬅ Volver
      </button>

      <div className="detalle-libro">
        <img
          src={libro?.imagen}
          alt={libro?.titulo}
          className="imagen-detalle"
        />
        <div className="info-detalle">
          <h2>{libro?.titulo || "Título no disponible"}</h2>
          <p>
            <strong>Autor:</strong> {libro?.autor || "Autor no disponible"}
          </p>
          <p>
            <strong>Descripción:</strong>{" "}
            {libro?.descripcion || "Sin descripción"}
          </p>

          {reserva ? (
            <p className="reserva-activa">
              📅 Este libro está reservado desde{" "}
              <strong>{reserva.fecha_inicio}</strong> hasta{" "}
              <strong>{reserva.fecha_fin}</strong>.
            </p>
          ) : (
            <>
              <div style={{ marginBottom: "1rem" }}>
                <label>
                  Fecha inicio:{" "}
                  <input
                    type="date"
                    value={fechaInicio}
                    onChange={(e) => setFechaInicio(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Fecha fin:{" "}
                  <input
                    type="date"
                    value={fechaFin}
                    onChange={(e) => setFechaFin(e.target.value)}
                  />
                </label>
              </div>

              <button
                className="boton-reservar"
                onClick={manejarReserva}
                disabled={reservando}
              >
                {reservando ? "Reservando..." : " Reservar este libro"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
