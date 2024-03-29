import SBSLogo from "../../imgs/sbs-logo.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { CustomButton } from "../atoms/CustomButton";
import { LabelFooter } from "../atoms/LabelFooter";
import { SelectFooter } from "../atoms/SelectFooter";
import "./style.css";

export const Footer = () => {
  return (
    <div className="bg-slate-900 text-white w-full py-4 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 py-8 gap-20">
        <div className="p-4">
          <div className="ml-[-1em] pb-4">
            <img src={SBSLogo} alt="logo" />
          </div>
          <p className="text-slate-400 mb-8">
            Treat every customer in such a memorable way that when our
            interaction is complete, the customer tells someone else how GREAT
            it was!
          </p>
          <div className="w-full">
            <LabelFooter text="Location" />
            <div className="flex flex-col md:flex-row gap-4">
              <CustomButton text="Open in google location" path="/services" />
              <div className="flex gap-4">
                <CustomButton
                  text={<PhoneIcon className="m-auto phoneIcon" />}
                  path="/services"
                />
                <CustomButton
                  text={<EnvelopeIcon className="m-auto phoneIcon" />}
                  path="/services"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex w-full items-center my-2">
            <div className="flex w-full flex-col">
              <LabelFooter text="Hours" />
              <div className="flex-col md:flex-row w-full flex z-10 items-center gap-4">
                <SelectFooter />
                <CustomButton text="Contact Us" path="/services" />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center my-2">
            <div className="flex w-full flex-col">
              <LabelFooter text="Services" />
              <div className="flex-col flex md:flex-row items-center gap-4">
                <SelectFooter />
                <CustomButton text="Book Now" path="/services" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 mt-4 text-center border-solid border-slate-800 border-t-2">
        <p className="text-slate-400 mb-8 text-xs">© 2023 All Rights Reserved | SBS Cleaning. Termns & conditions.</p>
      </div>
    </div>
  );
};
