import React, { useState } from "react";
import Logo from "../../assets/Logo_website_pet_shop.png";
import NavLinks from "./NavLinks";
import Switcher from "../Switcher";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex bg-gradient-to-b from-orange-300 fixed top-0 left-0 w-full backdrop-blur-sm flex items-center justify-between z-10">
      <img src={Logo} alt="logo" className="block px-6 pl-10 items-center cursor-pointer" />
      <ul className="hidden lg:flex font-semibold lg:text-center lg:justify-between gap-10">
        <NavLinks />
      </ul>
      {/* Mobile Nav */}
      {/*Search*/}
      <button type="button" class="bg-transparent lg:text-right hover:text-orange-400 dark:text-white dark:hover:text-orange-400 focus:text-orange-400 font-medium rounded-full text-sm py-2.5 text-center dark:bg-transparent dark:focus:text-orange-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="fill-current" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
      </button>
      {/*Shipping Cart*/}
      <button type="button" class="bg-transparent lg:text-right hover:text-orange-400 dark:text-white dark:hover:text-orange-400 focus:text-orange-400 font-medium rounded-full text-sm py-2.5 text-center dark:bg-transparent dark:focus:text-orange-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="fill-current" viewBox="0 0 576 512">
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>  
      </button>
      {/*User*/}
      <button type="button" class="bg-transparent lg:text-right hover:text-orange-400 dark:text-white dark:hover:text-orange-400 focus:text-orange-400 font-medium rounded-full text-sm py-2.5 text-center dark:bg-transparent dark:focus:text-orange-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="fill-current" viewBox="0 0 512 512">
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z"/></svg>
      </button>
      {/*Dark Mode*/}
      <button type="button" class="bg-transparent lg:text-right hover:text-orange-400 dark:text-white dark:hover:text-orange-400 focus:text-orange-400 font-medium rounded-full text-sm pt-8 pr-8 text-center dark:bg-transparent dark:focus:text-orange-400">
        <Switcher /> 
      </button> 
      <ul
        className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}>
        <NavLinks />
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
    </nav>
  );
};

export default Nav;