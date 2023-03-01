import { CustomButton } from "../components/CustomButton";
import "./style.css";

export const Home = () => {
  return (
    <>
      <div className="homeBg bg-no-repeat bg-cover grid grid-cols-2 py-44 px-11">
        <div>
          <h1 className="text-slate-900 text-7xl italic font-black my-4">Experienced <span className="text-indigo-500">Cleaning</span> Services.</h1>
          <p className="text-base	text-slate-900">We make the cleaning effortless.</p>
          <div className="rectangle bg-indigo-500 my-5" />
          <br />
          <CustomButton className="my-5" text="Get Free Estimate" path="/services" />
        </div>
      </div>
      hola
    </>
  );
};
