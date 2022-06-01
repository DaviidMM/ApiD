import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import apiList from "@/data/apis.json";
import { useState } from "react";

export default function HomePage() {
  const [apis] = useState(apiList);

  console.log(apis);

  return (
    <>
      <h1 className="text-3xl text-white">APIs disponibles</h1>
      <CardGrid>
        {apis.map((api) => (
          <Card
            key={api.id}
            id={api.id}
            title={api.title}
            description={api.description}
            image={api.image}
            url={api.url}
          />
        ))}
      </CardGrid>
    </>
  );
}
