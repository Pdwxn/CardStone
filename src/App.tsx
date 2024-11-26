import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Layout/navbar/NavBar";
import SearchBar from "./components/Layout/navbar/SearchBar";
import Footer from "./components/Layout/footer/Footer";

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="bg-slate-800">
      <header>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} />
        </Navbar>
      </header>
      <div className="ml-20 mr-20 flex flex-wrap gap-8 justify-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
