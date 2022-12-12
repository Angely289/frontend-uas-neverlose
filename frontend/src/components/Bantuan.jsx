import React from "react";

const Bantuan = () => {
  return (
   <section id="help" className="my-20 dark:bg-slate-900">
    <div className="pb-9">
      <h4 className="text-orange-400 font-medium text-center text-md">Bantuan</h4>
      <h2 className="text-3xl lg:text-4xl mt-1 text-center text-slate-900 font-bold hover:text-orange-400 dark:text-white">Hubungi Kami</h2>
      <p className="font-medium text-md text-center text-slate-500 md:text-lg mt-1 pb-4">Silahkan hubungi kami jika ada yang diperlukan.</p>
      <div className="flex flex-wrap md:w-2/4 md:mx-auto my-6 gap-2">
            <div className="w-full px-4 mb-8">
                <label for="name" className="text-base font-bold text-orange-400">Nama</label>
                <input type="text" id="name" placeholder="Masukkan nama anda" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-orange-400 focus:ring-1 focus:border-orange-400" />
            </div>
            <div class="w-full px-4 mb-8">
                <label for="email" class="text-base font-bold text-orange-400">Email</label>
                <input type="email" id="email" placeholder="Masukkan email anda" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-orange-400 focus:ring-1 focus:border-orange-400" />
            </div>
            <div class="w-full px-4 mb-8">
                <label for="email" class="text-base font-bold text-orange-400">No. Telepon</label>
                <input type="email" id="email" placeholder="Masukkan no. telp anda" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-orange-400 focus:ring-1 focus:border-orange-400" />
            </div>
            <div class="w-full px-4 mb-8">
                <label for="message" class="text-base font-bold text-orange-400">Pesan</label>
                <textarea type="email" id="email" placeholder="Ketik pesan anda disini" className="w-full bg-slate-200 text-slate-900 p-3 rounded-md focus:outline-none focus:ring-orange-400 focus:ring-1 focus:border-orange-400 h-32"></textarea>
            </div>
            <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-gradient-to-r from-amber-700 to-orange-300 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg shadow-lg shadow-amber-700/50 transition duration-500">Kirim</button>
            </div>       
      </div>
    </div>
   </section>
  );
};

export default Bantuan;