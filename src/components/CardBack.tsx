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
    <div className="w-full max-w-[20rem] rounded-[1.75rem] border border-amber-200/20 bg-slate-950/75 p-4 text-slate-100 shadow-2xl shadow-black/30 backdrop-blur">
      <h2 className="mb-4 text-2xl font-black leading-tight text-white">
        {CardBacks.name || "Unknown Card"}
      </h2>
      <div className="flex justify-center rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-950/80 p-3 ring-1 ring-white/10">
        <img
          src={
            CardBacks.img || "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={CardBacks.name}
          className="h-auto w-[230px] drop-shadow-2xl"
        />
      </div>
      <h3
        className="mt-4 text-sm font-semibold leading-6 text-slate-300"
        dangerouslySetInnerHTML={{
          __html: sanitizedDescription,
        }}
      ></h3>
    </div>
  );
}

export default CardBack;
