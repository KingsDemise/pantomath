"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-600 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-transparent"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 ">
        <button
          onClick={handleSubmit}
          className="h-10 border border-black hover:bg-black hover:text-white active:bg-black  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-black font-satoshi px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        >
          Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="h-10 border border-black hover:bg-black hover:text-white active:bg-black  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-black font-satoshi px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "Something New"
          )}
        </button>
      </div>
    </>
  );
}
