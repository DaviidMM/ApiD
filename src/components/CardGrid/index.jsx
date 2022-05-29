export default function CardGrid(props) {
  return (
    <div className="grid justify-center gap-4 mt-5 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] card-grid">
      {props.children}
    </div>
  );
}
