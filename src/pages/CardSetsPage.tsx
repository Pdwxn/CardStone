import { useState } from "react";
import Navbar from "../components/Layout/navbar/NavBar";
import SearchBar from "../components/Layout/navbar/SearchBar";
import Footer from "../components/Layout/footer/Footer";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

function CardSetsPage({ query, setQuery }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <nav>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} />
        </Navbar>
      </nav>
      <div className="ml-14 mr-14">
        <h1 className="mb-8 text-4xl text-slate-50 font-semibold">Card Sets</h1>
      </div>
      <Footer />
    </>
  );
}

export default CardSetsPage;
