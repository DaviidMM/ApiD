import { useEffect, useState } from "react";

export default function AuvasaPage() {
  const url = "https://api-auvasa.vercel.app";
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    // Set hostname
    setHostname(window.location.host);
  }, []);

  return (
    <p className="text-white">
      Añade un número de parada y línea a la URL para continuar.
      <br />
      Sintaxis: http://{hostname}/Nº parada/Línea.
      <br />
      Por ejemplo:{" "}
      <a href={url + "/811/3"} className="hover:text-blue-300">
        {url}/811/3
      </a>
    </p>
  );
}
