function Cards() {
  return (
    <div className="bg-green-300 p-6 rounded-2xl shadow-md max-w-md mx-auto text-slate-900">
      <h2 className="text-xl font-bold mb-2">CARD NAME</h2>
      <h3 className="text-gray-700">CARD FACTION</h3>
      <img
        src="https://es.pngtree.com/freepng/horse-pixel-icon-free-button-png_4490314.html"
        alt="Unicorn"
        className="w-full h-auto rounded-lg mt-4"
      />
      <h3 className="font-semibold text-gray-800 mt-4">ELITE</h3>
      <p className="text-gray-600 mt-2">DESCRIPTION</p>
      <div className="flex justify-between mt-4">
        <h4 className="text-gray-800 font-semibold">ATTACK</h4>
        <h4 className="text-gray-800 font-semibold">HEALTH</h4>
        <h4 className="text-gray-800 font-semibold">COST</h4>
      </div>
    </div>
  );
}

export default Cards;
