import React from "react";

const SearchBar = () => {
  return (
    <form>   
        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg aria-hidden="true" className="w-5 h-5 text-orange-400 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-[0.65rem] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-400 focus:border-orange-400" placeholder="Search here.." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-3.5 bg-orange-400 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[0.70rem] px-2 py-1">Search</button>
        </div>
    </form>
  );
};

export default SearchBar;