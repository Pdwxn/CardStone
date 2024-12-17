import { useState } from "react";
import CardList from "../components/content/CardList";
import Navbar from "../components/Layout/navbar/NavBar";
import SearchBar from "../components/Layout/navbar/SearchBar";
import Footer from "../components/Layout/footer/Footer";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  suggestions: string[];
  setSuggestions: (suggestions: string[]) => void;
}

function AllCardsPage({ query, setQuery, suggestions }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <nav>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} suggestions={suggestions} />
        </Navbar>
      </nav>
      <div className="ml-[6rem] mr-[6rem]">
        <h1 className="mb-8 text-4xl text-slate-50 font-semibold">All Cards</h1>
        <CardList loading={loading} setLoading={setLoading} />
      </div>
      <Footer />
    </>
  );
}

export default AllCardsPage;
