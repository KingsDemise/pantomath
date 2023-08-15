import Link from "next/link";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <div className=" bg-gradient-to-r from-black to-cyan-600 bg-clip-text text-transparent max-sm:hidden text-3xl font-satoshi font-bold italic tracking-wide hover:brightness-105 hover:shadow-md">
            Pantomath
          </div>
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 "></div>
        <button className=" bg-red-500 text-white font-satoshi px-6 py-2 font-medium italic rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
