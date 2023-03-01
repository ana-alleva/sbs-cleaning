import SBSLogo from '../imgs/sbs-logo.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { CustomButton } from './CustomButton';
import './style.css';

export const Footer =() => {
  return (
    <div className="grid grid-cols-2 bg-slate-900 text-white w-full py-4 px-10">
      <div className="p-4">
        <div><img src={SBSLogo} alt="logo" /></div>
        <p>Treat every customer in such a memorable way that when our interaction is complete, the customer tells someone else how GREAT it was!</p>
        <div className="flex flex-row">
          <CustomButton text="Open in google location" path="/services" />
          <CustomButton text={<PhoneIcon className="mr-2 phoneIcon" />} path="/services" />
          <CustomButton text={<EnvelopeIcon className="mr-2 phoneIcon" />} path="/services" />
        </div>
      </div>
      <div>
        <div className="flex items-center">
        <input type="text" id="first_name" class="bg-slate-800 py-4 px-6 text-gray-900 text-sm rounded-lg block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="John" required />
        <CustomButton text="Contact Us" path="/services" />
        </div>
      </div>
    </div>
  );
};
