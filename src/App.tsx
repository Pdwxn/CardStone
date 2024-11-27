  import { useState } from "react";
  import Navbar from "./components/Layout/navbar/NavBar";
  import SearchBar from "./components/Layout/navbar/SearchBar";
  import Footer from "./components/Layout/footer/Footer";
  import CardList from "./components/CardList"; 

  function App() {
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] =useState<boolean>(false)
    
    return (
      <div>
        <header>
          <Navbar>
            <SearchBar query={query} setQuery={setQuery} />
          </Navbar>
        </header>
        <div>
          <h1 className="ml-20 mb-10 text-white text-2xl font-bold">All Cards</h1>
        <div className="ml-20 mr-20">
          <CardList loading={loading} setLoading={setLoading} />
        </div>
        </div>
        <Footer />
      </div>
    );
  }

  export default App;
