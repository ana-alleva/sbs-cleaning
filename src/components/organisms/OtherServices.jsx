import { useState } from "react";
import { SubTitle } from "../atoms/SubTitle";
import { OtherServicesCard } from "../molecules/OtherServicesCard";
import ServiceOptionsMobile from "../molecules/ServiceOptionMobile";
import ServiceOptionsDesktop from "../molecules/ServiceOptionsDesktop";

const serviceOptions = {
  carpetCleaning: {
    id: "HOUSE_CLEANING",
    label: "House Cleaning",
  },
  commercialCarpetCleaning: {
    id: "COMMERCIAL_CARPET_CLEANING",
    label: "Commercial Carpet Cleaning",
  },
  furnitureCleaning: {
    id: "BIN_CLEANING",
    label: "Bin Trash Cleaning",
  },
  areaRug: {
    id: "AIRBNB_CLEANING",
    label: "AirBNB Cleaning",
  },
};

export const OtherServices = () => {
  const [selectedOption, setSelectedOption] = useState(
    serviceOptions.carpetCleaning
  );

  return (
    <div className="bg-white w-full py-11 px-10">
      <div className="py-11 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <SubTitle text="Other Services Provided" />
          <p className="text-slate-500 text-base">Choose between our offers</p>
        </div>
      </div>
      <div className="text-base flex justify-end md:justify-start font-bold">
        <div className="hidden md:block">
          <ServiceOptionsDesktop
            serviceOptions={serviceOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="block md:hidden">
          <ServiceOptionsMobile
            serviceOptions={serviceOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className="py-11 grid grid-cols-1 md:grid-cols-3 gap-4">
        <OtherServicesCard />
        <OtherServicesCard />
        <OtherServicesCard />
        <OtherServicesCard />
        <OtherServicesCard />
        <OtherServicesCard />
      </div>
    </div>
  );
};
