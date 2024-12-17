import { useState } from "react";
import Navbar from "../components/Layout/navbar/NavBar";
import SearchBar from "../components/Layout/navbar/SearchBar";
import Footer from "../components/Layout/footer/Footer";
import CardSetList from "../components/content/CardSetList";
import Selector from "../components/Selector";
import cardSets from "../components/options/cardSet";

interface Props {
  query: string;
  setQuery: (query: string) => void;
  suggestions: string[];
  setSuggestions: (suggestions: string[]) => void;
}

function CardSetsPage({ query, setQuery, suggestions }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [cardSetName, setCardSetName] = useState<string>("");

  return (
    <>
      <nav>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} suggestions={suggestions} />
        </Navbar>
      </nav>
      <div className="ml-[6rem] mr-[6rem]">
        <div className="flex flex-wrap object-center gap-15 justify-between items-center">
          <h1 className="mb-8 text-4xl text-slate-50 font-semibold">
            Card Sets
          </h1>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <label className="text-lg text-slate-50">Select a Card Set: </label>
            <Selector
            selectedSet={cardSetName}
            onSetChange={setCardSetName}
            options={cardSets}
          />
          </div>
        </div>
        {cardSetName && (
        <CardSetList
          loading={loading}
          setLoading={setLoading}
          setName={cardSetName}
        />
      )}
      </div>
      <Footer />
    </>
  );
}

export default CardSetsPage;
