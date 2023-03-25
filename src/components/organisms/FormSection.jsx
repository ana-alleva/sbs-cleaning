import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { SubTitle } from "../atoms/SubTitle";
import { FormRowInputs } from "../molecules/FormRowInputs";
import { SummaryCard } from "../molecules/SummaryCard";

export const FormSection = () => {
  return (
    <div className="bg-slate-200 w-full py-11 px-10">
      <div className="text-base flex justify-between font-bold">
        <div className="flex gap-4">
          <a className="selected text-indigo-500" href="/">
            Carpet Cleaning
          </a>
          <a className="text-slate-400" href="/">
            Commercial Carpet Cleaning
          </a>
          <a className="text-slate-400" href="/">
            Furniture Cleaning
          </a>
          <a className="text-slate-400" href="/">
            Area Rug
          </a>
        </div>
        <a className="text-indigo-500" href="/">
          <AdjustmentsHorizontalIcon className="h-5" />
        </a>
      </div>
      <div className="py-11 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <SubTitle text="Schedule Appointment" />
          <p className="text-slate-500 text-base">
            We've been carpet cleaning in Charlotte <br /> since since 2021. If
            your carpets need a cleaning give us a try.
          </p>
          <div className="mt-8 w-full">
            <FormRowInputs label="How many rooms?" />
            <FormRowInputs label="Entry or Hall?" />
            <FormRowInputs label="Staircase?" />
          </div>
        </div>
        <div className="flex justify-center">
          <SummaryCard />
        </div>
      </div>
    </div>
  );
};
