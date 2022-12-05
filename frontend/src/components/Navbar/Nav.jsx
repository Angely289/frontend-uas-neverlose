import React, { useState } from "react";
import Logo from "../../assets/Logo_website_pet_shop.png";
import NavLinks from "./NavLinks";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex bg-gradient-to-b from-orange-300 top-0 left-0 w-full text-center items-center justify-between">
      <img src={Logo} alt="logo" className="cursor-pointer" />
      <ul className="md:flex hidden items-center gap-10">
        <NavLinks />
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
      >
        <NavLinks />
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
    </nav>
  );
};

export default Nav;