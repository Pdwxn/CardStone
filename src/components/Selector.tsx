interface Props {
  selectedSet: string;
  onSetChange: (set: string) => void;
  options: string[];
}

function Selector({ selectedSet, onSetChange, options }: Props) {
  return (
    <select
      id="cardSet"
      value={selectedSet}
      onChange={(e) => onSetChange(e.target.value)}
      className="w-full rounded-2xl border border-amber-200/20 bg-slate-950/80 px-4 py-3 font-bold text-amber-50 shadow-lg shadow-black/20 outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-300/15 sm:min-w-72"
    >
      <option value="" disabled>
        Choose an option
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Selector;
