import React from "react";
import Logo from "../assets/Logo_website_pet_shop.png";
import SocialMedia from "./SocialMedia";
const Footer = () => {
  const Links = [
    { title: "Hewan", links: ["Anjing", "Kucing", "Burung", "Hewan Mungil"] },
    { title: "Produk", links: ["Kebutuhan Anjing", "Kebutuhan Kucing", "Kebutuhan Burung", "Kebutuhan Hewan Mungil"] },
    { title: "Tautan", links: ["Beranda", "Tentang", "Hewan", "Kebutuhan", "Review", "Bantuan"] },
  ];
  return (
    <footer className="pt-20 md:px-24 px-4 bg-amber-900">
      <div className="flex md:flex-row flex-col gap-20">
        <div className="flex-1">
          <img src={Logo} alt="logo" />
          <h3 class="font-bold text-2xl text-white hover:text-orange-400 py-2">Mocha Pet Shop</h3>
          <p className="md:w-1/2 leading-relaxed text-sm text-slate-300">
            Jl. A.A. Maramis, Kelurahan Lingkungan II, Paniki Bawah,
            Kecamatan Mapanget, Kota Manado, Sulawesi Utara 95256
          </p>
          <SocialMedia />
        </div>
        <div className="flex-1 flex flex-wrap gap-20">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="font-medium text-white pb-3">{link.title}</h1>
              {link.links.map((lk, idx) => (
                <li key={idx} className="py-2.5 text-sm text-slate-300 hover:text-orange-400">
                  {lk}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="text-center py-10 mt-6 text-[0.75rem] text-slate-300">
        Copyright © 2022. All Right Reserved.
      </p>
    </footer>
  );
}; 

export default Footer;