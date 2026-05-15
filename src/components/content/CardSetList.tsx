import { useEffect, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Spinner } from "@material-tailwind/react";
import { Card } from "../../models/card";
import { Filters } from "../../models/filters";
import { getPaginatedCardBySets } from "../../services/api/hs-api";
import Cards from "../Cards";

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setName: string;
}

const filterFields: { key: keyof Pick<Filters, "cost" | "attack" | "health">; label: string }[] = [
  { key: "cost", label: "Cost" },
  { key: "attack", label: "Attack" },
  { key: "health", label: "Health" },
];

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
    setCurrentPage(1);
  }, [setName]);

  useEffect(() => {
    if (!setName) return;
    const fetchCards = async () => {
      setLoading(true);
      try {
        const fetchedCards = await getPaginatedCardBySets(
          currentPage,
          pageSize,
          { ...filters, locale: filters.locale || "enUS" },
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
    setCurrentPage(1);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setCurrentPage(1);
    setFilters({ collectible: 1, locale: "enUS" });
  };

  return (
    <div>
      <section className="mb-8 border-y border-white/10 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300/80">
              {setName}
            </p>
            <h2 className="mt-1 text-2xl font-black text-white">Filter this set</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[32rem]">
            {filterFields.map((field) => (
              <label key={field.key} className="text-sm font-bold text-slate-200">
                {field.label}
                <input
                  type="number"
                  min={0}
                  value={filters[field.key] ?? ""}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/45 px-4 py-3 text-center text-lg font-black text-white outline-none transition [appearance:textfield] focus:border-amber-300 focus:ring-4 focus:ring-amber-300/15 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      updateFilters(field.key, value === "" ? undefined : Number(value));
                    }
                  }}
                />
              </label>
            ))}
          </div>
          <button
            onClick={clearFilters}
            className="rounded-full border border-white/15 px-5 py-3 font-bold text-slate-100 transition hover:bg-white/10"
          >
            Clear filters
          </button>
        </div>
      </section>

      {loading ? (
        <div className="flex h-64 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <Spinner
            className="h-20 w-20 animate-spin text-amber-300"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div>
      ) : cards.length === 0 ? (
        <div className="rounded-[2rem] border border-amber-200/15 bg-white/[0.05] p-10 text-center">
          <h3 className="text-2xl font-black text-white">No cards found for this set</h3>
          <p className="mt-3 text-slate-300">Try another set or clear the filters.</p>
        </div>
      ) : (
        <div className="grid justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Cards key={card.cardId || card.id} card={card} />
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 font-bold text-white">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <NavigateBeforeIcon style={{ fontSize: 30 }} />
        </button>
        <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-5 py-3 text-amber-100">
          Page {currentPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={cards.length < pageSize}
          className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <NavigateNextIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
}

export default CardSetList;
