import { CustomButton } from "../atoms/CustomButton";
import { FormSection } from "../organisms/FormSection";
import { OtherServices } from "../organisms/OtherServices";
import { RugComparisonSection } from "../organisms/RugComparisonSection";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "./style.css";
import { SubTitle } from "../atoms/SubTitle";

export const Home = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
            type="button"
            onClick={openModal}
          />
        </div>
        <div className="hidden md:w-1/4" />
      </div>
      <RugComparisonSection />
      <FormSection />
      <OtherServices />

      {/*Modal*/}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[750px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title>
                    <SubTitle text="Schedule Appointment" />
                  </Dialog.Title>
                  <div className="my-2">
                    <p className="text-base text-slate-500">
                      Perhaps there’s a way your business could benefit from
                      simplifying a process or experience? Please share your
                      thoughts in the form below and we’ll be in touch. We’d
                      love to hear from you.
                    </p>
                  </div>
                  <form className="grid grid-cols-1 md:grid-cols-2	gap-4 py-2.5">
                    <div>
                      <label className="text-slate-800 text-base font-bold my-4">
                        Name
                      </label>
                      <input
                        className="relative w-full cursor-default rounded-lg bg-slate-50 py-4 mr-2 px-6 text-left border border-slate-3000 text-slate-800 text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-100 sm:text-sm"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Full Name"
                      ></input>
                    </div>
                    <div>
                      <label className="text-slate-800 text-base font-bold my-4">
                        Email
                      </label>
                      <input
                        className="relative w-full cursor-default rounded-lg bg-slate-50 py-4 mr-2 px-6 text-left border border-slate-3000 text-slate-800 text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-100 sm:text-sm"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div>
                      <label className="text-slate-800 text-base font-bold my-4">
                        Phone Number
                      </label>
                      <input
                        className="relative w-full cursor-default rounded-lg bg-slate-50 py-4 mr-2 px-6 text-left border border-slate-3000 text-slate-800 text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-100 sm:text-sm"
                        type="number"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Phone Number"
                      ></input>
                    </div>
                    <div>
                      <label className="text-slate-800 text-base font-bold my-4">
                        Address
                      </label>
                      <input
                        className="relative w-full cursor-default rounded-lg bg-slate-50 py-4 mr-2 px-6 text-left border border-slate-3000 text-slate-800 text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-100 sm:text-sm"
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Your Address"
                      ></input>
                    </div>
                  </form>
                  <div className="my-5 w-full">
                    <button
                      onClick={closeModal}
                      className="hover:bg-indigo-400 items-center transition delay-300 duration-300 bg-indigo-500 italic uppercase py-4 px-6 rounded text-white text-sm font-bold w-full text-center"
                    >
                      Book Now!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
