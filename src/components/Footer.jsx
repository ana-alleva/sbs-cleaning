import SBSLogo from "../imgs/sbs-logo.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { CustomButton } from "./CustomButton";
import "./style.css";

export const Footer = () => {
  return (
    <div className="grid grid-cols-2 bg-slate-900 text-white w-full py-4 px-10">
      <div className="p-4">
        <div>
          <img src={SBSLogo} alt="logo" />
        </div>
        <p>
          Treat every customer in such a memorable way that when our interaction
          is complete, the customer tells someone else how GREAT it was!
        </p>
        <div className="flex flex-row">
          <CustomButton text="Open in google location" path="/services" />
          <CustomButton
            text={<PhoneIcon className="mr-2 phoneIcon" />}
            path="/services"
          />
          <CustomButton
            text={<EnvelopeIcon className="mr-2 phoneIcon" />}
            path="/services"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center my-2">
          <div className="flex flex-col">
            <label className="text-base text-white italic font-bold mb-4">Hours</label>
            <div className="flex items-center">
            <select className="bg-slate-800 py-4 mr-2 px-6 border border-slate-800 text-white text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-500 block w-fit dark:bg-slate-600 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" name="week" id="pet-select">
            <option value="week"><p>Mon to Fri from 9:00 to 5:00</p></option>
            <option value="saturday">Saturdays from 9:00 to 12:00</option>
            <option value="sunday">Sundays from 10:00 to 13:00</option>
          </select>
              <CustomButton text="Contact Us" path="/services" />
            </div>
          </div>
        </div>
        <div className="flex items-center my-2">
          <div className="flex flex-col">
            <label className="text-base text-white italic font-bold mb-4">Services</label>
            <div className="flex items-center">
            <select className="bg-slate-800 py-4 mr-2 px-6 border border-slate-800 text-white text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-500 block w-fit dark:bg-slate-600 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" name="week" id="pet-select">
            <option value="week"><p>Pre & Post Construction Cleaning...</p></option>
          </select>
              <CustomButton text="Book Now" path="/services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
