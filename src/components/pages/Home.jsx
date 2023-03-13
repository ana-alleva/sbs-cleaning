import { CustomButton } from "../atoms/CustomButton";
import { FormSection } from "../organisms/FormSection";
import { RugComparisonSection } from "../organisms/RugComparisonSection";
import "./style.css";

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="homeBg w-full bg-no-repeat bg-cover flex-col flex md:flex-row py-16 md:py-44 px-11">
        <div className="w-full md:w-3/4 py-8">
            <h1 className="text-slate-900 break-words text-5xl md:text-7xl italic font-black my-4">
              Experienced <span className="text-indigo-500">Cleaning</span>{" "}
              Services.
            </h1>
            <p className="text-slate-900 text-lg">
              We make the cleaning effortless.
            </p>
            <div className="rectangle bg-indigo-500 my-5" />
            <br />
            <CustomButton
              className="my-5"
              text="Get Free Estimate"
              path="/services"
            />
        </div>
        <div className="hidden md:w-1/4" />
      </div>
      <RugComparisonSection />
      <FormSection />
    </div>
  );
};
