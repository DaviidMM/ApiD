import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl text-white">APIs disponibles</h1>
      <CardGrid>
        <Card
          description="Información de las paradas de bus de Auvasa incluyendo tiempo restante para que una línea llegue y su destino"
          image="auvasa.jpg"
          apiUrl="https://api-auvasa.vercel.app/"
          title="API Auvasa"
          url="/auvasa"
        />
      </CardGrid>
    </>
  );
}
