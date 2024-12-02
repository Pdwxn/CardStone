import { useEffect, useState } from "react";
import { Card } from "../../models/card";
import { Filters } from "../../models/filters";
import { getPaginatedCardBySets } from "../../services/api/hs-api";
import Cards from "../Cards";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Spinner } from "@material-tailwind/react";

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setName: string;
}

function CardSetList({ loading, setLoading, setName }: Props) {
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
    if (!setName) return;
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

        const fetchedCards = await getPaginatedCardBySets(
          currentPage,
          pageSize,
          cleanedFilters,
          setName
        );
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [filters, currentPage, pageSize, setLoading, setName]);

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

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Spinner
            className="mt-10 mb-10 h-[6rem] w-[6rem] text-emerald-500/70 animate-spin"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center">
          {cards.map((card) => (
            <Cards key={card.cardId} card={card} />
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="mt-10 font-semibold text-white flex flex-wrap gap-8 justify-center items-center">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <NavigateBeforeIcon style={{ fontSize: 30 }} />
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={cards.length < pageSize}>
          <NavigateNextIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
}

export default CardSetList;
