export const CardSummaryRow = ({ rooms, m2, value, coin }) => {
  return (
    <div className="grid w-full grid-cols-2 py-2 px-8">
      <div className="h-16">
        <p className="text-base font-bold">{rooms}</p>
        <p className="text-slate-400">{m2}</p>
      </div>
      <div className="flex justify-end h-16">
        <p className="text-base font-bold">
          {""}
          <br /> {value} <span className="text-slate-400">{coin}</span>
        </p>
      </div>
    </div>
  );
};
