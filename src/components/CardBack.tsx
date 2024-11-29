import { CardBacks } from "../models/cardbacks";
import DOMPurify from "dompurify";

type CardBackProps = {
  CardBacks: CardBacks;
};

function CardBack({ CardBacks }: CardBackProps) {
  const sanitizedDescription = DOMPurify.sanitize(
    CardBacks.description || "Unknown description"
  );

  return (
    <div className="bg-emerald-300 p-6 rounded-2xl shadow-md w-[300px] mx-auto text-indigo-700">
      <h2 className="text-xl font-bold mb-2">
        {CardBacks.name || "Unknown Card"}
      </h2>
      <div className="flex flex-wrap justify-center">
        <img
          src={
            CardBacks.img || "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={CardBacks.name}
          className="w-[230px] h-auto"
        />
      </div>
      <h3
        className="mt-4 font-semibold text-gray-700"
        dangerouslySetInnerHTML={{
          __html: sanitizedDescription,
        }}
      ></h3>
    </div>
  );
}

export default CardBack;
