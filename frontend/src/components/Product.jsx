import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "./Button"; 

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";
import pdanjing1 from "../assets/pdanjing_1.png";
import pdanjing2 from "../assets/pdanjing_2.png";
import pdanjing3 from "../assets/pdanjing_3.png";
import pdanjing4 from "../assets/pdanjing_4.png";
import pdanjing5 from "../assets/pdanjing_5.png";
import pdanjing6 from "../assets/pdanjing_6.png";
import pdkucing1 from "../assets/pdkucing_1.png";
import pdkucing2 from "../assets/pdkucing_2.png";
import pdkucing3 from "../assets/pdkucing_3.png";
import pdkucing4 from "../assets/pdkucing_4.png";
import pdkucing5 from "../assets/pdkucing_5.png";
import pdkucing6 from "../assets/pdkucing_6.png";
import pdburung1 from "../assets/pdburung_1.png";
import pdburung2 from "../assets/pdburung_2.png";
import pdburung3 from "../assets/pdburung_3.png";
import pdburung4 from "../assets/pdburung_4.png";
import pdburung5 from "../assets/pdburung_5.png";
import pdburung6 from "../assets/pdburung_6.png";
import pdmungil1 from "../assets/pdmungil_1.png";
import pdmungil2 from "../assets/pdmungil_2.png";
import pdmungil3 from "../assets/pdmungil_3.png";
import pdmungil4 from "../assets/pdmungil_4.png";
import pdmungil5 from "../assets/pdmungil_5.png";
import pdmungil6 from "../assets/pdmungil_6.png";
import star from "../assets/star.png";
import star2 from "../assets/star0.5.png";
import star0 from "../assets/star0.png";
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";
const Product = () => {
  return (
    <section id="product" className="my-6 dark:bg-slate-900">
     <div className="container">
      <h4 className="text-orange-400 font-medium text-center text-md">Kebutuhan</h4>
      <h2 className="text-3xl lg:text-4xl mt-1 text-center text-slate-900 font-bold hover:text-orange-400 dark:text-white">Produk Kebutuhan</h2>
      <p className="font-medium text-md text-center text-slate-500 md:text-lg mt-1 pb-4">Berikut adalah kumpulan produk kebutuhan hewan berdasarkan kategorinya</p>
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
              <img src={pdkucing2} alt="pdkucing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Whiskas Adult Cat Food Tuna</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">25 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung serat untuk pencernaan, kalsium, omega 6, vitamin, taurine, dan antioksida. 
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp70.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing2} alt="pdanjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Pedigree</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">24 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung nutrisi yang baik untuk membangun sistem kekebalan tubuh.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp43.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdburung2} alt="pdburung_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Vitakraft</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">22 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Dapat mencegah gejala kekurangan gizi dan membantu mengoptimalkan perawatan.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp80.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdkucing1} alt="pdkucing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Kandang Kucing Mini Portabel</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">21 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Kandang kucing mini portabel yang praktis dibawa ke mana saja yang terbuat dari plastik.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp85.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>

      {/*Kategori Anjing*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={product1} alt="anjing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Anjing</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Makanan dan Tempat Tinggal</h3>
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
              <img src={pdanjing1} alt="pdanjing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">A-Frame Rumah Anjing</h2>
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
              Rumah anjing sederhana untuk hewan peliharaan anda dengan berbahan dasar kayu.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp543.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing2} alt="pdanjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Pedigree</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">24 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung nutrisi yang baik untuk membangun sistem kekebalan tubuh.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp43.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing3} alt="pdanjing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Good Dog</h2>
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
              Makanan anjing super premium mengandung asam amino lemak, vitamin, dan mineral.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp67.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing4} alt="pdanjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Happy Dog</h2>
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
              Makanan kering dengan daging domba bergizi, nasi yang mudah dicerna, dan lemak rendah.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp70.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing5} alt="pdanjing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Alpo</h2>
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
              Memiliki protein yang sangat berkualitas dimana terdapat 23 vitamin di dalamnya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp5.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing6} alt="pdanjing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Jerhigh</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Terbuat dari daging ayam berkualitas yang sama seperti makanan manusia.
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
        <img src={product2} alt="kucing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Kucing</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Makanan dan Tempat Tinggal</h3>
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
              <img src={pdkucing1} alt="pdkucing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Kandang Kucing Mini Portabel</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">21 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Kandang kucing mini portabel yang praktis dibawa ke mana saja yang terbuat dari plastik.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp85.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdkucing2} alt="pdkucing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Whiskas Adult Cat Food Tuna</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">25 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung serat untuk pencernaan, kalsium, omega 6, vitamin, taurine, dan antioksida. 
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp70.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdkucing3} alt="pdkucing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Friskies Adult Seafood Sensations</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star2} alt="star0.5" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">18 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Makanan kucing berkualitas yang mengandung nutrisi lengkap dan seimbang dari Purina.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp56.500,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdkucing4} alt="pdkucing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Happy Cat Minkas Perfect Mix</h2>
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
              Mengandung protein unggas, daging domba, dan ikan, yang kaya akan omega 3 dan omega 6.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp110.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdkucing5} alt="pdkucing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Blackwood</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Makanan kucing super-premium yang mengandung protein, lemak, dan serat.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp5.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdkucing6} alt="pdkucing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Bolt</h2>
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
              Makanan kucing ini memiliki varian rasa tuna dan bentuk makanan kibble yang menyerupai ikan.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>

      {/*Kategori Burung*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={product3} alt="burung" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Burung</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Makanan dan Tempat Tinggal</h3>
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
              <img src={pdburung1} alt="pdburung_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Sangkar Burung Putih</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangkar burung elegan berwarna putih. Berbahan besi dengan diameter 22 cm dan tinggi 25 cm.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp125.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdburung2} alt="pdburung_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Vitakraft</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">22 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Dapat mencegah gejala kekurangan gizi dan membantu mengoptimalkan perawatan.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp80.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdburung3} alt="pdburung_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Pakan Pleci Nutri Booster</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung vitamin yang tinggi, nutrisi, protein, dan karbohidrat.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp35.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdburung4} alt="pdburung_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Premia Spring</h2>
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
              Mengandung nutrisi makro, vitamin, dan mineral yang lengkap untuk burung peliharaan anda.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp80.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdburung5} alt="pdburung_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">FruitBlend Flavor with Natural Flavors</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star0} alt="star0" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Setiap butir pelet ini mengandung nutrisi yang dibutuhkan oleh burung.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp195.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdburung6} alt="pdburung_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Health & Vitality Blend Parrot Diet</h2>
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
              Dirancang agar bisa memenuhi kebutuhan nutrisi burung parkit tanpa membuatnya gemuk.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp129.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>

      {/*Kategori Burung*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={product4} alt="hewan mungil" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400 dark:text-white">Kategori Hewan Mungil</h1>
          <h3 className="font-medium text-xl lg:text-2xl dark:text-white">Makanan dan Tempat Tinggal</h3>
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
              <img src={pdmungil1} alt="pdmungil_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Rumah Hamster Pink</h2>
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
              Rumah tempat bermain dan beristirahat untuk hamster kesayangan anda.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2 dark:text-white">Rp120.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdmungil2} alt="pdmungil_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">SmartHeart Rabbit Food</h2>
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
              Makanan lengkap untuk kelinci yang diperkaya akan sayuran, wildberry, dan sereal.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp40.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdmungil3} alt="pdmungil_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Hedgehog Food</h2>
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
              Makanan landak yang mengandung omega 3, 6, 9, protein, vitamin, dan kalium.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp27.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdmungil4} alt="pdmungil_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Vitakraft Guinea Pig</h2>
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
              Mengandung vitamin yang diperkaya oleh extra dosis vitamin C yang penting untuk kesehatan.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2 dark:text-white">Rp40.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdmungil5} alt="pdmungil_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Kandang Kelinci Minimalis</h2>
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
              Terbuat dari kayu dan di cat menggunakan cat berkualitas yang kuat, awet, dan tahan lama.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp2.500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdmungil6} alt="pdmungil_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1 dark:text-white">Rumah Landak Mini</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2 dark:text-white">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">17 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Rumah landak khusus landak mini yang terbuat dari triplek meranti putih dengan ukuran 23x15x17.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2 dark:text-white">Rp125.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>
     </div>
    </section>
  );
};

export default Product; 