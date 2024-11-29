import { useState } from "react";
import CardList from "../components/content/CardList";
import Navbar from "../components/Layout/navbar/NavBar";
import SearchBar from "../components/Layout/navbar/SearchBar";
import Footer from "../components/Layout/footer/Footer";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

function AllCardsPage({ query, setQuery }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <nav>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} />
        </Navbar>
      </nav>
      <div className="ml-14 mr-14">
        <h1 className="mb-8 text-4xl text-slate-50 font-semibold">All Cards</h1>
        <CardList loading={loading} setLoading={setLoading} />
      </div>
      <Footer />
    </>
  );
}

export default AllCardsPage;
