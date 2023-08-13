import Link from "next/link";

export default function HomeHeader() {
  return (
    <>
      <header className="flex justify-between p-5 text-sm">
        <div className=" bg-gradient-to-r from-black to-cyan-600 bg-clip-text text-transparent max-sm:hidden text-3xl font-satoshi font-bold italic tracking-wide">
          Pantomath
        </div>
        <div className="flex space-x-4">
          <button className=" bg-red-500 text-white font-satoshi px-6 py-2 font-medium italic rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </header>
    </>
  );
}
