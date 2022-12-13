import React from "react";

const FormLogin = () => {
  return (
    <section id="#login">
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-slate-900 dark:text-white">Selamat Datang</h5>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nama@gmail.com" required />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Masukkan kata sandi</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingat Saya</label>
                    </div>
                    <a href="#home" class="ml-auto text-sm text-orange-400 hover:underline dark:text-blue-500">Lupa Kata Sandi?</a>
                </div>
                <button type="submit" class="w-full text-white bg-orange-400 hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:opacity-80">Masuk ke Akun</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                   Belum Terdaftar? <a href="#bantuan" class="text-orange-400 hover:underline dark:text-orange-400">Buat Akun Baru</a>
                </div>
            </form>
    </div>
    </section>
  );
};

export default FormLogin;