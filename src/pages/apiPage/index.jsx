import useApi from "@/hooks/useApi";

export default function ApiPage({ params: { apiId } }) {
  const { title, description, image, url } = useApi(apiId);

  console.log({ title, description, image, url });

  return (
    <div className="text-white">
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <img className="w-96 rounded-xl" src={`/images/${image}`} />
      <h2 className="my-4 text-2xl">Descripción</h2>
      {description}
      <br />
      <br />
      <h2 className="my-4 text-2xl">Enlace</h2>
      <a
        href={url}
        className="hover:text-blue-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
      <br />
      <br />
      <br />
      <br />
      Añade un número de parada y línea a la URL para continuar.
      <br />
      Sintaxis: {url}/Nº parada/Línea.
      <br />
      Por ejemplo:{" "}
      <a href={url + "/811/3"} className="hover:text-blue-300">
        {url}/811/3
      </a>
    </div>
  );
}
