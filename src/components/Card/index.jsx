import { useEffect, useState } from "react";
import { apiStates } from "@/data/apiStates";
import CardStatus from "./cardStatus";
import { LinkIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { Link } from "wouter";

export default function Card({ description, id, image, url, title }) {
  const [status, setStatus] = useState(apiStates.loading);

  useEffect(() => {
    console.log("useEffect");
    // Set api status
    fetch(url).then((res) => {
      if (res.status === 200) {
        setStatus(apiStates.success);
      } else {
        setStatus(apiStates.error);
      }
    });
  }, []);

  return (
    <div className="flex flex-row overflow-hidden transition-all bg-gray-900 border rounded-lg md:max-w-lg md:flex-col text-slate-400 border-slate-400">
      <div className="hidden h-full md:block lg:h-36 card-image">
        <Link href={`/api/${id}`} className="relative block group">
          <img
            src={`images/${image}`}
            alt="Auvasa Image"
            className="object-cover w-full h-full lg:h-36"
          />
          <span className="absolute items-center justify-center hidden w-full h-full text-center text-white transition -translate-x-1/2 -translate-y-1/2 group-hover:flex group-hover:bg-black group-hover:animate-[fadeIn_.3s_ease-in-out] group-hover:bg-opacity-40 top-2/4 left-2/4 font-bold">
            Más información
          </span>
        </Link>
      </div>
      <div className="p-6 font-semibold card-content">
        <div className="flex flex-row items-center justify-between gap-4 pb-3 text-white card-header">
          <div className="flex flex-row items-center card-title ">
            <CardStatus status={status} />
            <h3 className="ml-3 text-3xl font-bold">{title}</h3>
          </div>
          <a
            href={url}
            className="flex items-center p-2 transition border rounded-lg border-slate-400 hover:border-white text-slate-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acceso a la API
            <ExternalLinkIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
        <Link
          href={`/api/${id}`}
          className="flex p-2 text-sm border rounded-lg w-fit border-slate-400 md:text-base hover:text-white hover:border-white"
        >
          <LinkIcon className="inline w-5 h-5 mr-2" />
          Más información
        </Link>
        <p className="pt-3 card-description">{description}</p>
      </div>
    </div>
  );
}
