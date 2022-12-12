import React from "react";
import Nav from "./Navbar/Nav";
import Pic1 from "../assets/pic_1.png";
import ButtonFill from "./ButtonFill";
import Pic2 from "../assets/pic_2.png";
const Header = () => {
  const Info = [
    {
      image: Pic2,
    },
    {
      title1: "Tentang Kami",
      title2: "Buat Hewan Peliharaan ",
      title3: "Menjadi ",
      span: "Partner-Mu",
      des1: "Mocha Pet Shop adalah pet shop online pertama yang ada di Manado. Menyediakan berbagai jenis hewan dan kebutuhannya khusus untuk",
      des2: " para pecinta hewan.",
      des3: "Dijamin 100% anda akan suka karena kami menyediakan hewan-hewan unik dan lucu yang banyak diminati saat ini. Kami juga menyediakan transportasi ",
      des4: "pengantaran yang dijamin bisa sampai dengan aman di tempat tujuan."
    },
  ];
  return (
    <section id="home" className="py-4 px-4 md:px-24 dark:bg-slate-900">
     <div className="container">
      <div className="pl-6 py-4">
      <Nav />
      </div>
      <div className="flex md:flex-row flex-col gap-5 pt-40">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-slate-900 md:text-xl lg:text-3xl dark:text-white">
            Selamat Datang di
          </h1>
          <h1 className="block font-bold text-orange-400 text-4xl mt-2 lg:text-5xl">Mocha <span className="text-amber-700">Pet Shop</span>
          </h1>
          <p className="font-medium text-xl text-slate-900 mt-2 pb-2 leading-relaxed dark:text-white">Manjo berbelanja di 
                <span className="text-amber-700"> Mocha Pet Shop~</span> 
                <br />Kini Pet Shop Online tersedia di Manado!</p>
          <br />
          <div className="flex md:gap-4 gap-2 flex-wrap">
            <ButtonFill>Klik Disini</ButtonFill>
          </div>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
          <div class="relative mt-16 lg:mt-9 lg:right-0">
            <img src={Pic1} alt="beranda" className="max-w-full mx-auto pb-10"/>
          </div>
        </div>
      </div>

      <div id="about" className="pt-36 lg:pt-60 pb-16">
      <div className="bg-amber-700 flex md:flex-row flex-col md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-lg">
        {Info.map((info, i) => (
          <div key={i}>
            <img src={info.image} alt="" />
            <h6 className="text-base text-orange-400 my-2 pl-5 pr-20">{info.title1}</h6>
            <h1 className="font-bold text-4xl tracking-tight text-white pl-5 pr-20">{info.title2}</h1>
            <h1 className="font-bold text-4xl tracking-tight text-white my-3 pl-5 pr-20">{info.title3}<span className="text-orange-400">{info.span}</span></h1>
            <p className="w-full font-normal text-white leading-relaxed pl-5 pr-20">{info.des1}</p>
            <p className="mb-3 w-full font-normal text-white leading-relaxed pl-5 pr-20">{info.des2}</p>
            <p className="w-full font-normal text-white leading-relaxed pl-5 pr-20">{info.des3}</p>
            <p className="mb-3 w-full font-normal text-white leading-relaxed pl-5 pr-20">{info.des4}</p>
          </div>
        ))}
      </div>
      </div>
     </div> 
    </section>
  );
};

export default Header;