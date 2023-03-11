import { SubTitle } from "../atoms/SubTitle";
import { RugCard } from "../molecules/RugCard";
import Rug10 from "../../imgs/rug-10.png";
import Rug20 from "../../imgs/rug-20.png";
import Rug30 from "../../imgs/rug-30.png";
import Rug40 from "../../imgs/rug-40.png";
import "./style.css";

export const CheckDifference = () => {
  return (
    <div className="py-4 px-10">
        <SubTitle text="Schedule Appointment"/>
        <p className="text-slate-500 text-base">Residue left behind by detergents and shampoos cause dirt to quickly accumulate over time.</p>
        <div className="grid grid-cols-4 gap-4 bg-slate-400">
            <RugCard text="1 month" backgroundRug="bg-rug-10" rug={Rug10} />
            <RugCard text="1 month" backgroundRug="bg-rug-20" rug={Rug20} />
            <RugCard text="1 month" backgroundRug="bg-rug-30" rug={Rug30} />
            <RugCard text="1 month" backgroundRug="bg-rug-40" rug={Rug40} />
        </div>
    </div>
  );
};
