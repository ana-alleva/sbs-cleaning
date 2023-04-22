import { useState } from "react";
import { SubTitle } from "../atoms/SubTitle";
import { FormRowInputs } from "../molecules/FormRowInputs";
import ServiceOptionsMobile from "../molecules/ServiceOptionMobile";
import ServiceOptionsDesktop from "../molecules/ServiceOptionsDesktop";
import { SummaryCard } from "../molecules/SummaryCard";

const serviceOptions = {
  carpetCleaning: {
    id: "CARPET_CLEANING",
    label: "Carpet Cleaning",
  },
  commercialCarpetCleaning: {
    id: "COMMERCIAL_CARPET_CLEANING",
    label: "Commercial Carpet Cleaning",
  },
  furnitureCleaning: {
    id: "FURNITURE_CLEANING",
    label: "Furniture Cleaning",
  },
  areaRug: {
    id: "AREA_RUG",
    label: "Area Rug",
  },
};

export const FormSection = () => {
  const [selectedOption, setSelectedOption] = useState(
    serviceOptions.carpetCleaning
  );

  return (
    <div className="bg-slate-200 w-full py-11 px-10">
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
