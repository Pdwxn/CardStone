import { Card } from "../models/card";

type CardProps = {
  card: Card;
};

function Cards({ card }: CardProps) {
  return (
    <div className="bg-emerald-300 p-6 rounded-2xl shadow-md w-[300px] mx-auto text-indigo-700">
      <h2 className="text-xl font-bold mb-2">{card.name || "Unknown Card"}</h2>
      <h3 className=" font-semibold text-gray-700">
        {card.playerClass || "Unknown Class"}
      </h3>
      <div className="flex flex-wrap justify-center">
        <img
          src={card.img || "https://via.placeholder.com/200x300?text=No+Image"}
          alt={card.name}
          className="w-[230px] h-auto"
        />
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        <h4 className="text-gray-800">{card.rarity || "Unknown"}</h4>
        <h4 className="text-gray-800">{card.type}</h4>
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        <p className="text-indigo-800 font-bold">Cost: {card.cost ?? "N/A"}</p>
        <p className="text-indigo-800 font-bold">
          Attack: {card.attack ?? "N/A"}
        </p>
        <p className="text-indigo-800 font-bold">
          Health: {card.health ?? "N/A"}
        </p>
      </div>
    </div>
  );
}

export default Cards;
