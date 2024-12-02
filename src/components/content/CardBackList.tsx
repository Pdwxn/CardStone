import { useEffect, useState } from "react";
import { getPaginatedCardBacks } from "../../services/api/hs-api";
import CardBack from "../CardBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Spinner } from "@material-tailwind/react";
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

  return (
    <>
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
          {cardbacks.map((cardbacks) => (
            <CardBack key={cardbacks.cardBackId} CardBacks={cardbacks} />
          ))}
        </div>
      )}

      <div className="mt-10 font-semibold text-white flex flex-wrap gap-8 justify-center items-center">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <NavigateBeforeIcon style={{ fontSize: 30 }} />
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={cardbacks.length < pageSize}>
          <NavigateNextIcon style={{ fontSize: 30 }} />
        </button>
      </div>
    </>
  );
}

export default CardBackList;
