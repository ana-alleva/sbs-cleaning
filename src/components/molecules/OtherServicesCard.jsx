import icon01 from "../../imgs/icons/icon-01.svg";

export const OtherServicesCard = ({ text }) => {
  return (
    <div className="bg-white h-fit w-full md:w-[300px] lg:w-[360px] p-5 rounded-md text-slate-800 shadow-lg">
      <div className="product-img h-52 rounded-md flex items-end">
        <div className="w-full px-4 py-2 flex items-center justify-between bg-[#3333336e] text-white">
          <p className="text-base font-bold">From</p>
          <h5 className="text-3xl font-bold">
            $ 35<span className="text-base"> /H</span>
          </h5>
        </div>
      </div>
      <div className="p-2 border-t-2 w-full">
        <div className="py-4 flex justify-between items-center">
          <p className="text-base font-bold">House Cleaning</p>
          <img src={icon01} alt="" />
        </div>
        <p className="text-base font-light">
          Deep Cleaning start $45 per hours.{" "}
          <span>
            {"("}Doesnt include exterior cleaning, refrigerator, exterior
            windows, garages{")"}
          </span>
        </p>
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
