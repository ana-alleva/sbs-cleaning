import Dust from "../../imgs/white-dust.svg";
import { CardSummaryRow } from "./CardSummaryRow";

export const SummaryCard = ({ text }) => {
  return (
    <div className="bg-white h-fit w-full md:w-[420px] rounded-md text-slate-800 shadow-sm">
      <div className="p-8 mb-4 bg-indigo-500 rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none text-white flex items-center justify-between">
        <p className="font-bold">Summary</p>
        <img src={Dust} alt="" />
      </div>
      <div className="grid grid-rows-4">
        <CardSummaryRow
          rooms="4 Rooms"
          m2="Steam Clean 1m2"
          value="165,00"
          coin="USD"
        />
        <CardSummaryRow
          rooms="4 Rooms"
          m2="Steam Clean 1m2"
          value="165,00"
          coin="USD"
        />
        <CardSummaryRow
          rooms="4 Rooms"
          m2="Steam Clean 1m2"
          value="165,00"
          coin="USD"
        />
        <CardSummaryRow
          rooms="4 Rooms"
          m2="Steam Clean 1m2"
          value="165,00"
          coin="USD"
        />
      </div>
      <div className="p-8 border-t-2 w-full	border-slate-50	border-solid">
        <div className="grid grid-cols-2 w-full">
          <div className="h-16">
            <p className="text-base font-bold">Total</p>
            <p className="text-slate-400 text-sm">
              <span className="text-rose-500">*</span> Minimum labor price
              129USD
            </p>
          </div>
          <div className="flex justify-end h-16">
            <p className="text-xl text-indigo-500 font-bold">
              {""}
              <br /> 175 <span className="text-sm text-slate-400">USD</span>
            </p>
          </div>
        </div>
        <div className="flex mt-2 py-4 w-full">
          <a
            className="hover:bg-indigo-400 transition delay-300 duration-300 bg-indigo-500 italic uppercase py-4 px-6 rounded text-white text-sm font-bold w-full text-center"
            href="/"
          >
            Book Now!
          </a>
        </div>
      </div>
    </div>
  );
};
