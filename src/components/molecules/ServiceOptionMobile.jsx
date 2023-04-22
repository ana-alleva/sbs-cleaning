import React, { Fragment } from "react";
import cn from "classnames";
import { Menu, Transition } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

const ServiceOptionsMobile = ({
  serviceOptions,
  selectedOption,
  setSelectedOption,
}) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-indigo-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <AdjustmentsHorizontalIcon className="h-5" aria-hidden="true" />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          {Object.values(serviceOptions).map((option) => (
            <Menu.Item key={option.id}>
              {({ active }) => (
                <button
                  className={cn(
                    "group flex w-full items-center rounded-md px-2 py-2 text-sm",
                    { "text-slate-900 ": option.id !== selectedOption.id },
                    { "text-indigo-500 ": option.id === selectedOption.id },
                    { "bg-indigo-500 text-white": active }
                  )}
                  onClick={() => setSelectedOption(option)}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default ServiceOptionsMobile;