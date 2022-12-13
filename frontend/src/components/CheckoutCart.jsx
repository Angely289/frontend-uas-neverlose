import React from "react";
import Dropdown from "./Dropdown";

const CheckoutCart = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h4 className="text-xl font-medium text-slate-900 dark:text-white">Checkout</h4>
                <h6 className="text-md font-medium text-slate-900 dark:text-white">Info Pelanggan</h6>
                <div>
                    <label for="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Customer</label>
                    <input type="nama" name="namacus" id="namacus" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>
                <div>
                    <label for="alamat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                    <input type="alamat" name="alamat" id="alamat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>
                <div>
                    <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catatan</label>
                    <input type="notes" name="notes" id="notes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <h6 className="text-md font-medium text-slate-900 dark:text-white">Metode Pembayaran</h6>
                            <Dropdown />
                        </div>
                    </div>
                    
                </div>
                <button type="submit" class="w-full text-white bg-orange-400 hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:opacity-80">Bayar</button>
            </form>
    </div>
  );
};

export default CheckoutCart;