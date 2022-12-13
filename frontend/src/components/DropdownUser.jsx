import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import FormLogin from "./FormLogin"


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownUser() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full px-2 py-2 text-sm font-medium bg-transparent hover:text-orange-400 rounded-full dark:text-white dark:hover:text-orange-400 text-right dark:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="fill-current" viewBox="0 0 512 512">
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"/></svg>
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
                            <FormLogin />
                        </a>
                    )}
                </Menu.Item>
            </Transition>
        </Menu>
    );
}