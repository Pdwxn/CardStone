import { useEffect, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Spinner } from "@material-tailwind/react";
import { getPaginatedCardBacks } from "../../services/api/hs-api";
import CardBack from "../CardBack";
import { CardBacks } from "../../models/cardbacks";

interface Props {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

function CardBackList({ loading, setLoading }: Props) {
  const [cardbacks, setCardBacks] = useState<CardBacks[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      try {
        const fetchedCards = await getPaginatedCardBacks(currentPage, pageSize);
        setCardBacks(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [currentPage, pageSize, setLoading]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04]">
        <Spinner
          className="h-20 w-20 animate-spin text-amber-300"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
    );
  }

  if (cardbacks.length === 0) {
    return (
      <div className="rounded-[2rem] border border-amber-200/15 bg-slate-950/60 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur md:p-12">
        <p className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-200/20 bg-amber-200/10 text-3xl font-black text-amber-100">
          ?
        </p>
        <h2 className="text-3xl font-black text-white">Card backs are unavailable</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          HearthstoneJSON does not expose a card back API right now, so this
          page is intentionally disabled instead of making a broken request.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cardbacks.map((cardback) => (
          <CardBack key={cardback.cardBackId} CardBacks={cardback} />
        ))}
      </div>

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
          disabled={cardbacks.length < pageSize}
          className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <NavigateNextIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
}

export default CardBackList;
