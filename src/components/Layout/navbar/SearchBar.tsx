import { useRef } from 'react'
import { useKey } from '../../../services/hooks/useKey';

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

  return (
    <input
      className="self-center border-2 py-2 px-4 rounded-lg bg-slate-500 text-white font-semibold"
      type="text"
      placeholder="Search cards..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  )
}

export default SearchBar