import { useEffect, useState } from "react";
import { getPaginatedAllCards } from "../services/api/hs-api";
import Cards from "./Cards";
import { Card } from "../models/card";
import { Filters } from "../models/filters";

interface Props {
    loading: boolean;
    setLoading: (loading: boolean) => void
}

function CardList({loading, setLoading}: Props) {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;
  const [filters, setFilters] = useState<Filters>({
    cost: undefined,
    attack: undefined,
    health: undefined,
    collectible: 1,
    locale: "enUS",
  });

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const cleanedFilters: Filters = {
          cost: filters.cost,
          attack: filters.attack,
          health: filters.health,
          collectible: filters.collectible,
          locale: filters.locale || "enUS",
        };

        const fetchedCards = await getPaginatedAllCards(currentPage, pageSize, cleanedFilters);
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [filters, currentPage, pageSize, setLoading]);


  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const updateFilters = (key: keyof Filters, value: number | undefined) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  

  return (
    <div>
      {/* Filtros */}
      <div className="mb-10 font-semibold text-white flex flex-wrap justify-start">
        <label className="mr-5">
          Cost: 
          <input
            type="number"
            min={0}
            className="ml-3 border-2 w-12 h-auto py-1 px-1 rounded-lg bg-slate-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) { 
                  updateFilters("cost", Number(value) || undefined);
                }
              }}
          />
        </label>
        <label>
          Attack: 
          <input
            type="number"
            min={0}
            className="ml-3 mr-3 border-2 w-12 h-auto py-1 px-1 rounded-lg bg-slate-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  updateFilters("attack", Number(value) || undefined);
                }
              }}
          />
        </label>
        <label>
          Health: 
          <input
            type="number"
            min={0}
            className="ml-3 border-2 w-12 h-auto py-1 px-1 rounded-lg bg-slate-500 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  updateFilters("health", Number(value) || undefined);
                }
              }}
          />
        </label>
      </div>

      {/* <button className="bg-emerald-300 p-6 rounded-2xl shadow-md w-[300px] mx-auto text-indigo-700">cosa cosa</button> */}

      {/* Cartas */}
      {/* <div className="flex flex-wrap gap-8 justify-center">
        {cards.map((card) => (
          <Cards key={card.cardId} card={card} />
        ))}
      </div> */}

    {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {cards.map((card) => (
            <Cards key={card.cardId} card={card} />
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="mt-10 font-semibold text-white flex flex-wrap gap-8 justify-center">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="mr-3">
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={cards.length < pageSize} className="ml-3">
          Next
        </button>
      </div>
    </div>
  );
}

export default CardList;
