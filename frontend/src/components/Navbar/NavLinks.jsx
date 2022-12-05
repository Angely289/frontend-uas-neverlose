import React from "react";

const NavLinks = () => {
  const Links = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Tentang",
      link: "/",
    },
    {
      name: "Hewan",
      link: "/",
    },
    {
      name: "Kebutuhan",
      link: "/",
    },
    {
        name: "Review",
        link: "/",
    },
    {
      name: "Bantuan",
      link: "/",
    },
  ];
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-orange-400">
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default NavLinks;