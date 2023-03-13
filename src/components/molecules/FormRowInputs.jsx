import { SelectForm } from "../atoms/SelectForm";

export const FormRowInputs = ({ label }) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-slate-800 text-base font-bold mb-4">{label}</label>
      <div className="flex items-center">
        <input
          className="relative cursor-default rounded-lg bg-slate-50 py-4 mr-2 px-6 text-left border border-slate-3000 text-slate-800 text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-100 sm:text-sm"
          type="text"
          id="fname"
          name="fname"
          placeholder="Steam Clean 1m2"
        ></input>
        <SelectForm />
      </div>
    </div>
  );
};
