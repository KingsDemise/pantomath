import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function WebSearchResults({ results }) {
  return (
    <div className="p-5 w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link
              className="group-hover:underline decoration-green-800 text-xl truncate font-medium text-green-800"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
