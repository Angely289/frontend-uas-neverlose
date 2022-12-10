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
import pdanjing7 from "../assets/pdanjing_7.png";
import star from "../assets/star.png";
import product1 from "../assets/product_1.png";
const Product = () => {
  return (
    <section id="product" className="my-6">
      <h4 className="text-orange-400 font-medium text-center text-md">Kebutuhan</h4>
      <h2 className="text-3xl lg:text-4xl mt-1 text-center text-slate-900 font-bold hover:text-orange-400">Produk Kebutuhan</h2>
      <p className="font-medium text-md text-center text-slate-500 md:text-lg mt-1 pb-4">Berikut adalah kumpulan produk kebutuhan hewan berdasarkan kategorinya</p>
    {/* Rekomendasi */}
      <div className="pt-10 px-5">
          <h1 className="font-semibold text-3xl text-left lg:text-4xl hover:text-orange-400">Rekomendasi</h1>
      </div>
      <div className="my-2 mx-6">
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
              <h2 className="font-semibold text-left pt-1">A-Frame Rumah Anjing</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Rumah anjing sederhana untuk hewan peliharaan anda dengan berbahan dasar kayu.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp543.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing2} alt="pdanjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Pedigree</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">24 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung nutrisi yang baik untuk membangun sistem kekebalan tubuh.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2">Rp43.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing3} alt="pdanjing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Good Dog</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">17 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Makanan anjing super premium mengandung asam amino lemak, vitamin, dan mineral.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2">Rp67.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing4} alt="pdanjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Happy Dog</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Makanan kering dengan daging domba bergizi, nasi yang mudah dicerna, dan lemak rendah.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2">Rp70.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>

      {/*Kategori Anjing*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={product1} alt="anjing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400">Kategori Anjing</h1>
          <h3 className="font-medium text-xl lg:text-2xl">Makanan dan Tempat Tinggal</h3>
        </div>
      </div>
      <div className="my-6 mx-6">
        <div className="items-end text-right">
            <a href="#home" className="flex text-base text-end text-slate-900 underline underline-offset-2">Lihat semua</a>
        </div>
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
              <h2 className="font-semibold text-left pt-1">A-Frame Rumah Anjing</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Rumah anjing sederhana untuk hewan peliharaan anda dengan berbahan dasar kayu.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp543.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing2} alt="pdanjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Pedigree</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">24 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Mengandung nutrisi yang baik untuk membangun sistem kekebalan tubuh.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2">Rp43.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing3} alt="pdanjing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Good Dog</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">17 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Makanan anjing super premium mengandung asam amino lemak, vitamin, dan mineral.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2">Rp67.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing4} alt="pdanjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Happy Dog</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Makanan kering dengan daging domba bergizi, nasi yang mudah dicerna, dan lemak rendah.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-8 py-2">Rp70.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing5} alt="pdanjing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Alpo</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">14 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki protein yang sangat berkualitas dimana terdapat 23 vitamin di dalamnya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp5.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing6} alt="pdanjing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Jerhigh</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Terbuat dari daging ayam berkualitas yang sama seperti makanan manusia.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={pdanjing7} alt="pdanjing_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Royal Canin</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">16 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Produk ini menggunakan bahan baku yang penting untuk menjaga kesehatan hewanmu.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>
 

    </section>
  );
};

export default Product; 