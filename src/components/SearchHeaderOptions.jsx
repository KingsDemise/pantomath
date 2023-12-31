"use client";

import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  function selectTab(tab) {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`hover:brightness-105 hover:shadow-md flex items-center space-x-1 border-b-4 border-transparent active:text-red-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/web" && "!text-red-600 !border-red-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>Web</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`hover:brightness-105 hover:shadow-md flex items-center space-x-1 border-b-4 border-transparent active:text-red-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-red-600 !border-red-600"
        }`}
      >
        <BsCardImage className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
