import { Link } from "wouter";

export default function Header() {
  return (
    <div className="h-[100px] header flex flex-row justify-between items-center font-semibold bg-slate-900 w-full px-16 2xl:px-96">
      <Link to="/">
        <a className="hover:brightness-125">
          <h1 className="text-5xl text-[#219ebc]">Apify</h1>
        </a>
      </Link>
      <a
        href="https://github.com/DaviidMM"
        className="transition-all brightness-75 hover:brightness-150"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={`/images/GitHub-Mark-Light-32px.png`} alt="Github link" />
      </a>
    </div>
  );
}
