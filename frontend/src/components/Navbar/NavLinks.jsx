import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Beranda",
      link: "#home",
    },
    {
      name: "Tentang",
      link: "#home",
    },
    {
      name: "Hewan",
      link: "#pet",
    },
    {
      name: "Kebutuhan",
      link: "#product",
    },
    {
        name: "Review",
        link: "#review",
    },
    {
      name: "Bantuan",
      link: "#help",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold text-slate-900 hover:text-orange-400 dark:text-white">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;