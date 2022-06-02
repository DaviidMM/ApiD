import { Link } from "wouter";
import Logo from "../Icons/Logo";

export default function Header() {
  return (
    <div className="h-[100px] header flex flex-row justify-between items-center font-semibold bg-slate-900 w-full px-16 2xl:px-96 text-blue-400">
      <div className="h-full">
        <Link to="/" className="flex flex-row items-end h-full py-4">
          <Logo className="w-12 h-12" />
          <h1 className="text-5xl">pify</h1>
        </Link>
      </div>
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
