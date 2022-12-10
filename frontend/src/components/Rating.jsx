import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Pagination } from "swiper";
import user1 from "../assets/user_1.png";
import user2 from "../assets/user_2.png";
import user3 from "../assets/user_3.png";
import user4 from "../assets/user_4.png";
import star from "../assets/star.png";
const Product = () => {
  return (
    <section id="review" className="my-20">
      <h4 className="text-orange-400 font-medium text-center text-md">Review</h4>
      <h2 className="text-3xl lg:text-4xl mt-1 text-center text-slate-900 font-bold hover:text-orange-400">Penilaian Produk</h2>
      <p className="font-medium text-md text-center text-slate-500 md:text-lg mt-1 pb-4">Review dari beberapa orang yang sudah pernah berbelanja di Mocha Pet Shop.</p>
      <div className="my-16 mx-6">
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          autoplay={{
            delay: 3600,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Keyboard, Pagination]}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20">
          <SwiperSlide>
            <article>
                <div className="flex items-center mb-4 space-x-4">
                    <img src={user1} alt="user_1" className="w-10 h-10 rounded-full" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>Agatha Marinette 
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Pembeli : Anjing Poodle</span></p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Sangat Bagus</h3>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>Berkomentar pada tanggal <time datetime="2022-05-23 18:00">23 Mei 2022</time></p></footer>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Anjingnya sampai dengan aman. Sangat lucu dan gemoy. 
                <br />Saya suka!! Next, saya akan beli hewan yang lain lagi</p>
                <aside>
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">15 orang terbantu dengan komentar ini</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <a href="#home" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Membantu</a>
                        <a href="#home" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Laporkan Penyalahgunaan</a>
                    </div>
                </aside>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
                <div className="flex items-center mb-4 space-x-4">
                    <img src={user2} alt="user_2" className="w-10 h-10 rounded-full" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>John Luke
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Pembeli : Landak Mini Salt and Pepper</span></p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Sangat Bagus</h3>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>Berkomentar pada tanggal <time datetime="2022-07-15 18:00">15 Juli 2022</time></p></footer>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Tidak kusangka landaknya akan selucu ini. Thank you admin.
                <br />Untung durinya tidak terlalu tajam hahaha..</p>
                <aside>
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">12 orang terbantu dengan komentar ini</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <a href="#home" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Membantu</a>
                        <a href="#home" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Laporkan Penyalahgunaan</a>
                    </div>
                </aside>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
                <div className="flex items-center mb-4 space-x-4">
                    <img src={user3} alt="user_3" className="w-10 h-10 rounded-full" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>Marchel Louw
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Pembeli : Anjing Poodle</span></p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Sangat Bagus</h3>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>Berkomentar pada tanggal <time datetime="2022-05-23 18:00">23 Mei 2022</time></p></footer>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Anjingnya sampai dengan aman. Sangat lucu dan gemoy. 
                <br />Saya suka!! Next, saya akan beli hewan yang lain lagi</p>
                <aside>
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">15 orang terbantu dengan komentar ini</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <a href="#home" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Membantu</a>
                        <a href="#home" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Laporkan Penyalahgunaan</a>
                    </div>
                </aside>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
                <div className="flex items-center mb-4 space-x-4">
                    <img src={user4} alt="user_4" className="w-10 h-10 rounded-full" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>Lucia Lamora
                            <span className="block text-sm text-gray-500 dark:text-gray-400">Pembeli : Anjing Poodle</span></p>
                    </div>
                </div>
                <div className="flex items-center mb-1">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Sangat Bagus</h3>
                </div>
                <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                    <p>Berkomentar pada tanggal <time datetime="2022-05-23 18:00">23 Mei 2022</time></p></footer>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Anjingnya sampai dengan aman. Sangat lucu dan gemoy. 
                <br />Saya suka!! Next, saya akan beli hewan yang lain lagi</p>
                <aside>
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">15 orang terbantu dengan komentar ini</p>
                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <a href="#home" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Membantu</a>
                        <a href="#home" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Laporkan Penyalahgunaan</a>
                    </div>
                </aside>
            </article>
          </SwiperSlide>
        </Swiper>       
      </div>
    </section>
  );
};

export default Product; 