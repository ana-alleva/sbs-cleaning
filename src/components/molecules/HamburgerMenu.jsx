import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Bars4Icon, HomeIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid';

export function HamburgerMenu() {
  return (
    <div className="top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-indigo-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Bars4Icon
              className="mx-1 h-5 w-5 text-indigo-50 hover:text-indigo-100"
              aria-hidden="true"
            />
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
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-slate-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <HomeIcon
                        className="mr-2 h-5 w-5 text-indigo-50"
                        aria-hidden="true"
                      />
                    ) : (
                      <HomeIcon
                        className="mr-2 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                    )}
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <WrenchScrewdriverIcon
                        className="mr-2 h-5 w-5 text-indigo-50"
                        aria-hidden="true"
                      />
                    ) : (
                      <WrenchScrewdriverIcon
                        className="mr-2 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                    )}
                    Services
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
