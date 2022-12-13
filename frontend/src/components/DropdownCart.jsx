import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import CheckoutCart from "./CheckoutCart"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownCart() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full px-2 py-2 text-sm font-medium bg-transparent hover:text-orange-400 rounded-full dark:text-white dark:hover:text-orange-400 text-right dark:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="fill-current" viewBox="0 0 576 512">
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  
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
                
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#home"
                            className={classNames(
                                active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                "block px-4 py-2 text-sm"
                            )}
                        >
                            <CheckoutCart />
                        </a>
                    )}
                </Menu.Item>
            </Transition>
        </Menu>
    );
}