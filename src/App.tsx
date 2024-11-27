import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Layout/navbar/NavBar";
import SearchBar from "./components/Layout/navbar/SearchBar";
import Footer from "./components/Layout/footer/Footer";
import { Card } from "./models/card";
import { getAllCards } from "./services/hs-api";

function App() {
  const [query, setQuery] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await getAllCards();
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="bg-slate-800">
      <header>
        <Navbar>
          <SearchBar query={query} setQuery={setQuery} />
        </Navbar>
      </header>
      <body>
        {/* <h1 className="ml-20 mb-10 text-white text-xl font-bold">{cards.cardSet}</h1> */}
      <div className="ml-20 mr-20 flex flex-wrap gap-8 justify-center">
        {cards.map((card) => (
          <Cards key={card.cardId} card={card} />
        ))}
      </div>
      </body>
      <Footer />
    </div>
  );
}

export default App;
