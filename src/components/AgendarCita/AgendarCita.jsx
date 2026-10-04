import "./AgendarCita.css";
import { useState } from "react";

const AgendarCita = () => {
  const [artista, setArtista] = useState("");
  const [fecha, setFecha] = useState("");
  const [resultado, setResultado] = useState(null);

  return (
    <div className="agendar-cita label-cita">
      <h1>AGENDAR CITA</h1>

      <p className="agendar-descripcion">
        Consulta la disponibilidad de tu artista de confianza.
      </p>

      <form
        className="cita-form"
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts/3`,
            );

            console.log(response);

            const data = await response.json();
            console.log(data);
            setResultado(data);
          } catch (error) {
            console.log("Error en la Peticion:", error);
          }
        }}
      >
        <ul className="label-cita">
          <li>
            <label className="label-cita" htmlFor="artista">
              Selecciona un artista:
            </label>

            <select id="artista" onChange={(e) => setArtista(e.target.value)}>
              <option value="Dave Thomas">Anime</option>
              <option value="Patrick Rosmo">Retratos</option>
              <option value="Quick Silver">Ralismo</option>
              <option value="Rose Baggeti">Tradicionales</option>
              <option value="Sahra Rousel">Personalizados</option>
              <option value="Crhistin Lohan">Variado</option>
            </select>

            <p className="artista-seleccionado">
              Artista seleccionado: {artista}
            </p>
          </li>

          <li>
            <label htmlFor="fecha">Selecciona la fecha de tu cita:</label>

            <input
              type="date"
              name="fecha"
              id="fecha"
              onChange={(e) => setFecha(e.target.value)}
            />
            <p>Fecha Seleccionada: {fecha}</p>
          </li>

          <button type="submit">Consultar Disponibilidad</button>
        </ul>
      </form>

      {resultado && (
        <div>
          <h2>Resultado de la API</h2>

          <p>Usuario: {resultado.userId}</p>
          <p>ID: {resultado.id}</p>
          <p>Título: {resultado.title}</p>
          <p>Descripción: {resultado.body}</p>
          <p>
            Consumiendo API placeholder,
            "https://jsonplaceholder.typicode.com/posts/${artista}" son datos
            ficticios recibidos por la api publica de placeholder y usamos fetch
          </p>
        </div>
      )}
    </div>
  );
};

export default AgendarCita;
