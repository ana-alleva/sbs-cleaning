import { SubTitle } from "../atoms/SubTitle";
import { RugCard } from "../molecules/RugCard";
import Rug10 from "../../imgs/rug-10.png";
import Rug20 from "../../imgs/rug-20.png";
import Rug30 from "../../imgs/rug-30.png";
import Rug40 from "../../imgs/rug-40.png";
import BgRug10 from "../../imgs/bg-rug-10.png";
import BgRug20 from "../../imgs/bg-rug-20.png";
import BgRug30 from "../../imgs/bg-rug-30.png";
import BgRug40 from "../../imgs/bg-rug-40.png";
import "./style.css";

export const RugComparisonSection = () => {
  return (
    <div className="py-4">
      <div className="px-10">
        <SubTitle text="Check the difference" />
        <p className="text-slate-500 text-base">
          Residue left behind by detergents and shampoos cause dirt to quickly
          accumulate over time.
        </p>
      </div>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <RugCard bgImage={BgRug10} text="After 1 month" rug={Rug10} />
        <RugCard bgImage={BgRug20} text="After 2 month" rug={Rug20} />
        <RugCard bgImage={BgRug30} text="After 3 month" rug={Rug30} />
        <RugCard bgImage={BgRug40} text="After 6 month" rug={Rug40} />
      </div>
    </div>
  );
};
