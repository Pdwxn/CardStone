interface Props {
  selectedSet: string;
  onSetChange: (set: string) => void;
  options: string[];
}

function Selector({ selectedSet, onSetChange, options }: Props) {
  return (
    <div>
      <select
        id="cardSet"
        value={selectedSet}
        onChange={(e) => onSetChange(e.target.value)}
        className="p-2 rounded-md bg-slate-700 text-white"
      >
        <option value="" disabled></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
