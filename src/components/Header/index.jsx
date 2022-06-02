import { Link } from "wouter";
import Logo from "../Icons/Logo";

export default function Header() {
  return (
    <div className="h-[100px] header flex flex-row justify-between items-center font-semibold bg-slate-900 w-full py-4 px-16 2xl:px-96 text-blue-400">
      <Link
        to="/"
        className="flex flex-row items-end h-full p-3 rounded-lg hover:bg-slate-800 hover:text-red-300"
      >
        <Logo className="w-11 h-11" />
        <h1 className="hidden text-5xl lg:block">pid</h1>
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
