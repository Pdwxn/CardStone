import { useRef } from "react";
import { useKey } from "../../../services/hooks/useKey";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  suggestions: string[];
}

const SearchBar = ({ query, setQuery, suggestions }: Props) => {
  const inputElement = useRef<HTMLInputElement>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current?.focus();
    setQuery("");
  });

  return (
    <div className="relative w-full max-w-xs">
      {" "}
      <input
        className="self-center border-2 py-2 px-4 rounded-lg bg-slate-500 text-white font-semibold w-full"
        type="text"
        placeholder="Search cards..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputElement}
      />{" "}
      {Array.isArray(suggestions) && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {" "}
          {suggestions.map((suggestion, index) => (
            <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
              {" "}
              {suggestion}{" "}
            </div>
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default SearchBar;