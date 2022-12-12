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
import star from "../assets/star.png";
import kategori1 from "../assets/kategori_1.png";
import kategori2 from "../assets/kategori_2.png";
const Pet = () => {
  return (
    <section id="pet" className="my-2 dark:bg-slate-900">
     <div className="container">
      <h4 className="text-orange-400 font-medium text-center text-md">Hewan Kami</h4>
      <h2 className="text-3xl lg:text-4xl mt-1 text-center text-slate-900 font-bold hover:text-orange-400">Jenis Hewan</h2>
      <p className="font-medium text-md text-center text-slate-500 md:text-lg mt-1 pb-4">Berikut adalah jenis hewan berdasarkan kategorinya</p>
    {/* Rekomendasi */}
      <div className="pt-10 px-5">
          <h1 className="font-semibold text-3xl text-left lg:text-4xl hover:text-orange-400">Rekomendasi</h1>
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
              <img src={anjing1} alt="anjing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Beagle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak dengan kombinasi 3 warna. Ramah, sangat aktif, gesit, setia, dan pintar.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing2} alt="anjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Cavalier King Charles Spaniel</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak Blenheim (merah kastanye dan putih). Periang, lembut, dan tak kenal takut.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-1 py-2">Rp134.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing3} alt="anjing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Pomeranian</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna cream dan putih. <br />Sangat lincah, cerdas, dan imut.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp900.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing4} alt="anjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Poodle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna coklat. Pandai, ceria, selalu waspada, dan memiliki insting yang tajam.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>       
      </div>

      {/*Kategori Anjing*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={kategori1} alt="anjing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400">Kategori Anjing</h1>
          <h3 className="font-medium text-xl lg:text-2xl">Beserta kumpulan rasnya</h3>
        </div>
      </div>
      <div className="my-6">
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
              <img src={anjing1} alt="anjing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Beagle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak dengan kombinasi 3 warna. Ramah, sangat aktif, gesit, setia, dan pintar.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing2} alt="anjing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Cavalier King Charles Spaniel</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak Blenheim (merah kastanye dan putih). Periang, lembut, dan tak kenal takut.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp134.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing3} alt="anjing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Pomeranian</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna cream dan putih. <br />Sangat lincah, cerdas, dan imut.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp900.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing4} alt="anjing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Poodle</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">20 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna coklat. Pandai, ceria, selalu waspada, dan memiliki insting yang tajam.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp800.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing5} alt="anjing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Chihuahua</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangat lincah, agresif, berani, cepat, percaya diri, dan berbakti.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp5.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing6} alt="anjing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Shih Tzu</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">14 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Anjing imut hasil peranakan dari China. Ramah, senang bermain, mudah bergaul, dan pintar.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={anjing7} alt="anjing_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Maltese</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">16 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki corak warna putih. <br />Aktif, suka bermain, cerdas, dan setia.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp2.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>       
      </div>

      {/*Kategori Kucing*/}
      <div className="flex flex-wrap text-slate-900 text-left pt-4 py-4 px-6">
        <img src={kategori2} alt="kucing" />
        <div className="py-8 mt-4 px-5">
          <h1 className="font-semibold text-3xl lg:text-4xl hover:text-orange-400">Kategori Kucing</h1>
          <h3 className="font-medium text-xl lg:text-2xl">Beserta kumpulan rasnya</h3>
        </div>
      </div>
      <div className="my-6">
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
              <img src={kucing1} alt="kucing_1" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Anggora</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">18 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Suka bermain, sangat aktif, riuh, dan suka mencari perhatian pemiliknya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-6 py-2">Rp650.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing2} alt="kucing_2" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Singapura</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Periang, senang bermain, tidak akan merusak barang di sekitarnya, dan interaktif.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2">Rp18.500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing3} alt="kucing_3" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Russian Blue</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">12 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Cerdas dan lucu, tetapi cenderung pemalu di sekitar orang asing.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp2.500.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing4} alt="kucing_4" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Balinese</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Sangat aktif, menyenangkan, dan suka bermain dengan pemiliknya.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp4.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing5} alt="kucing_5" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Siam</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">10 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki rasa ingin tahu yang tinggi, cerdas, dan lincah.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2">Rp17.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing6} alt="kucing_6" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Maine Coon</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">5.0 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">6 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki sifat yang ramah dan mudah beradaptasi.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-2 py-2">Rp15.000.000,00</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={kucing7} alt="kucing_7" className="shadow-0 max-w-full" />
              <h2 className="font-semibold text-left pt-1">Birman</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">4.5 <span className="text-slate-400">• </span>
                <span className="font-medium underline underline-offset-2">15 terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">
              Memiliki suara yang lembut, pintar, aktif, lincah, dan suka diperhatikan.
              </p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-4 py-2">Rp5.400.000,00</h3>
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