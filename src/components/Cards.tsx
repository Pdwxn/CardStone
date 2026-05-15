import { Card } from "../models/card";

type CardProps = {
  card: Card;
};

function Cards({ card }: CardProps) {
  return (
    <article className="group relative w-full max-w-[18rem] overflow-hidden rounded-3xl border border-amber-200/20 bg-slate-950/70 p-4 text-slate-100 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-amber-200/60 hover:shadow-amber-500/20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-amber-300/15 to-transparent opacity-80"></div>

      <div className="relative">
        <div className="mb-3">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-300/80">
            {card.cardClass || card.playerClass || "Unknown Class"}
          </p>
          <h2 className="mt-2 text-xl font-black leading-tight text-white">
            {card.name || "Unknown Card"}
          </h2>
        </div>

        <div className="flex justify-center">
          <img
            src={card.img || "https://via.placeholder.com/200x300?text=No+Image"}
            alt={card.name}
            className="h-auto w-[210px] drop-shadow-2xl transition duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs font-bold text-amber-100">
            {card.rarity || "Unknown"}
          </span>
          <span className="rounded-full border border-teal-200/20 bg-teal-200/10 px-3 py-1 text-xs font-bold text-teal-100">
            {card.type || "Unknown"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-sm font-black">
          <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-100 ring-1 ring-blue-300/20">
            Cost {card.cost ?? "-"}
          </span>
          <span className="rounded-full bg-orange-500/15 px-3 py-1 text-orange-100 ring-1 ring-orange-300/20">
            Atk {card.attack ?? "-"}
          </span>
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-100 ring-1 ring-emerald-300/20">
            Hp {card.health ?? "-"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Cards;
