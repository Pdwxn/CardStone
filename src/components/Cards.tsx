import { Card } from "../models/card";

type CardProps = {
  card: Card;
};

function Cards({ card }: CardProps) {
  return (
    <div className="bg-green-300 p-6 rounded-2xl shadow-md w-[300px] mx-auto text-slate-900">
      <h2 className="text-xl font-bold mb-2">{card.name || "Unknown Card"}</h2>
      <h3 className="text-gray-700">{card.playerClass || "Unknown Class"}</h3>
      <img
        src={card.img || "https://via.placeholder.com/200x300?text=No+Image"}
        alt={card.name}
        className="w-[200px] h-auto"
      />
      <h3 className="font-semibold text-gray-800 mt-4">{card.type}</h3>
      <h4 className="font-semibold text-gray-800 mt-4">
        {card.rarity || "Unknown"}
      </h4>
      {card.mechanics && (
        <ul className="text-gray-500 mt-4">
          {card.mechanics.map((mechanic, index) => (
            <li key={index}>- {mechanic.name}</li>
          ))}
        </ul>
      )}
      <p className="text-gray-600 mt-2">
        {card.text || "No description available"}
      </p>
      <div className="flex flex-wrap justify-between mt-4">
        <p className="text-gray-800 font-bold">Cost: {card.cost ?? "N/A"}</p>
        <p className="text-gray-800 font-bold">
          Attack: {card.attack ?? "N/A"}
        </p>
        <p className="text-gray-800 font-bold">
          Health: {card.health ?? "N/A"}
        </p>
      </div>

    </div>
  );
}

export default Cards;
