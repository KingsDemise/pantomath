import Link from "next/link";

export default function HomeHeader() {
  return (
    <>
      <header className="flex justify-between p-5 text-sm">
        <div className="max-sm:hidden text-3xl font-satoshi font-medium italic text-lg text-black tracking-wide">
          Pantomath
        </div>
        <div className="flex space-x-4">
          <button className=" bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </header>
    </>
  );
}
