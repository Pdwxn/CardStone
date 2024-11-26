import { useRef } from 'react'
import { useKey } from '../../../hooks/useKey';

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar = ({ query, setQuery }: Props) => {
  const inputElement = useRef<HTMLInputElement>(null)

  useKey('Enter', function () {
    if(document.activeElement === inputElement.current) return;
    inputElement.current?.focus();
    setQuery("")
  })

  console.log(inputElement)

  return (
    <input
      className="self-center border-2 py-2 px-4 rounded-lg bg-slate-500 text-slate-400"
      type="text"
      placeholder="Search cards..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  )
}

export default SearchBar