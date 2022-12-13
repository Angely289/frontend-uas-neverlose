import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import anjing1 from "../assets/anjing_1.png";
import anjing2 from "../assets/anjing_2.png";
import anjing3 from "../assets/anjing_3.png";
import anjing4 from "../assets/anjing_4.png";
import anjing5 from "../assets/anjing_5.png";
import anjing6 from "../assets/anjing_6.png";
import anjing7 from "../assets/anjing_7.png";
import kucing1 from "../assets/kucing_1.png";
import kucing2 from "../assets/kucing_2.png";
import kucing3 from "../assets/kucing_3.png";
import kucing4 from "../assets/kucing_4.png";
import kucing5 from "../assets/kucing_5.png";
import kucing6 from "../assets/kucing_6.png";
import kucing7 from "../assets/kucing_7.png";
import burung1 from "../assets/burung_1.png";
import burung2 from "../assets/burung_2.png";
import burung3 from "../assets/burung_3.png";
import burung4 from "../assets/burung_4.png";
import burung5 from "../assets/burung_5.png";
import burung6 from "../assets/burung_6.png";
import burung7 from "../assets/burung_7.png";
import mungil1 from "../assets/mungil_1.png";
import mungil2 from "../assets/mungil_2.png";
import mungil3 from "../assets/mungil_3.png";
import mungil4 from "../assets/mungil_4.png";
import mungil5 from "../assets/mungil_5.png";
import mungil6 from "../assets/mungil_6.png";
import mungil7 from "../assets/mungil_7.png";
import star from "../assets/star.png";
import star2 from "../assets/star0.5.png";
import star0 from "../assets/star0.png";
import kategori1 from "../assets/kategori_1.png";
import kategori2 from "../assets/kategori_2.png";
import kategori3 from "../assets/kategori_3.png";
import kategori4 from "../assets/kategori_4.png";
const Pet = () => {
  return (
    <section id="pet" className="my-2 dark:bg-slate-900">
     <div className="container">
      <h4 className="text-orange-400 font-medium text-center text-md">Hewan Kami</h4>
      <h2 className="text-3xl lg:text-4xl mt-1 text-center text-slate-900 font-bold hover:text-orange-400 dark:text-white">Jenis Hewan</h2>
      <p className="font-medium text-md text-center text-slate-500 md:text-lg mt-1 pb-4">Berikut adalah jenis hewan berdasarkan kategorinya</p>
    {/* Rekomendasi */}
      <div className="pt-10 px-5">
          <h1 className="font-semibold text-3xl text-left lg:text-4xl hover:text-orange-400 dark:text-white">Rekomendasi</h1>
      </div>
      <div className="my-2">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20">
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil1} alt="mungil_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Kelinci Holland Lop</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangat enerjik, aktif, dan bersahabat, namun sulit digendong dan dipegang.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp300.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung3} alt="burung_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Hantu</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Pendengar yang baik, memiliki penglihatan yang tajam, pendiam, sederhana, dan bijak.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 py-2 dark:text-white">Rp500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing4} alt="anjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Poodle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Pendengar yang baik, memiliki penglihatan yang tajam, pendiam, sederhana, dan bijak.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing1} alt="kucing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Anggora</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">18 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Suka bermain, sangat aktif, riuh, dan suka mencari perhatian pemiliknya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp650.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>

      {/*Kategori Anjing*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={kategori1} alt="anjing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Anjing</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Beserta kumpulan rasnya</h3>
        </div>
      </div>
      <div className="my-6">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20">
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing1} alt="anjing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Beagle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak dengan kombinasi 3 warna. Ramah, sangat aktif, gesit, setia, dan pintar.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing2} alt="anjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Cavalier King Charles Spaniel</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak Blenheim (merah kastanye dan putih). Periang, lembut, dan tak kenal takut.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl py-2 dark:text-white">Rp134.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing3} alt="anjing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Pomeranian</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna cream dan putih. <br />Sangat lincah, cerdas, dan imut.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp900.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing4} alt="anjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Poodle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna coklat. Pandai, ceria, selalu waspada, dan memiliki insting yang tajam.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing5} alt="anjing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Chihuahua</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangat lincah, agresif, berani, cepat, percaya diri, dan berbakti.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp5.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing6} alt="anjing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Shih Tzu</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">14 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Anjing imut hasil peranakan dari China. Ramah, senang bermain, mudah bergaul, dan pintar.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing7} alt="anjing_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Maltese</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">16 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna putih. <br />Aktif, suka bermain, cerdas, dan setia.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>       
      </div>

      {/*Kategori Kucing*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={kategori2} alt="kucing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Kucing</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Beserta kumpulan rasnya</h3>
        </div>
      </div>
      <div className="my-6">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20">
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing1} alt="kucing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Anggora</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">18 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Suka bermain, sangat aktif, riuh, dan suka mencari perhatian pemiliknya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp650.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing2} alt="kucing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Singapura</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Periang, senang bermain, tidak akan merusak barang di sekitarnya, dan interaktif.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp18.500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing3} alt="kucing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Russian Blue</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Cerdas dan lucu, tetapi cenderung pemalu di sekitar orang asing.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp2.500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing4} alt="kucing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Balinese</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangat aktif, menyenangkan, dan suka bermain dengan pemiliknya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp4.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing5} alt="kucing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Siam</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki rasa ingin tahu yang tinggi, cerdas, dan lincah.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp17.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing6} alt="kucing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Maine Coon</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki sifat yang ramah dan mudah beradaptasi.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp15.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing7} alt="kucing_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Birman</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki suara yang lembut, pintar, aktif, lincah, dan suka diperhatikan.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp5.400.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>       
      </div>

      {/*Kategori Burung*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={kategori3} alt="burung" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Burung</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Beserta kumpulan rasnya</h3>
        </div>
      </div>
      <div className="my-6">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20">
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung1} alt="burung_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Nuri</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">18 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki bulu berwarna merah dan suara yang merdu, serta mampu menirukan suara manusia.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung2} alt="burung_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Kakatua</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">14 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Penuh kasih sayang, lucu, dan jail.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp3.800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung3} alt="burung_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Hantu</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Pendengar yang baik, memiliki penglihatan yang tajam, pendiam, sederhana, dan bijak.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung4} alt="burung_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Beo</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">16 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Pendengar yang baik, memiliki penglihatan yang tajam, pendiam, sederhana, dan bijak.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp1.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung5} alt="burung_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Merpati</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Dapat mengirim surat tanpa tersesat, setia kepada pasangannya, dan tidak dapat berkhianat.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp30.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung6} alt="burung_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Kesturi</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Cukup aktif, sering terlihat bertengkar, dan bermain dengan suara yang cukup berisik.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp550.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={burung7} alt="burung_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Burung Kutilang</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Suka hidup berkelompok, sangat bersahabat, dan mudah beradaptasi.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp100.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>
      
      {/*Kategori Hewan Mungil*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={kategori4} alt="hewan mungil" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Hewan Mungil</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Beserta kumpulan rasnya</h3>
        </div>
      </div>
      <div className="my-6">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
            400: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20">
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil1} alt="mungil_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Kelinci Holland Lop</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangat enerjik, aktif, dan bersahabat, namun sulit digendong dan dipegang.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp300.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil2} alt="mungil_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Landak Mini Salt and Pepper</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">3.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">5 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Jinak, pemalu, dan penakut. Durinya tidak berbahaya dan aman.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp220.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil3} alt="mungil_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">American Guinea Pig</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">17 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Ramah dan senang bermain dengan anak-anak.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp330.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil4} alt="mungil_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Tupai Merah</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Berani, agresif, suka beraktifitas, dan pandai.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp175.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil5} alt="mungil_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Guinea Pig Peruvian</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Ramah, suka bersosialisasi, dan jarang menggigit.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp750.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil6} alt="mungil_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Hamster Eropa</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">9 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Cukup aktif, sering terlihat bertengkar, dan bermain dengan suara yang cukup berisik.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2 dark:text-white">Rp10.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={mungil7} alt="mungil_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Kelinci Netherland Dwarf</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">7 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Pemalu dan mudah gelisah tetapi umumnya ramah.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp1.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>
     </div>
    </section>
  );
};

export default Pet; 