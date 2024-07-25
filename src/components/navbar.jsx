import { MdOutlineSearch, MdPerson, MdInfo, MdMarkunread } from "react-icons/md";

export default function Navbar(){
    return(
        <>
        {/* Navbar */}
        {<div className="w-full h-12 bg-fuchsia-500 flex-col flex border-b-4 border-fuchsia-700 transition-all duration-500
        md:flex-row md:h-14">

            <div className="flex-1 flex items-center mx-10 justify-center 
            md:justify-normal">
              <img src="/vite.svg" class="h-8" alt="Flowbite Logo" />
              <span className="text-2xl font-medium mx-1">Vitewind</span>
            </div>

            <ul className="flex-1 justify-center items-center gap-10 hidden
            md:flex">
              <li><a className="font-medium hover:text-black" href="#">Home</a></li>
              <li><a className="font-medium hover:text-black" href="#">Signup</a></li>
              <li><a className="font-medium hover:text-black" href="#">About us</a></li>
            </ul>

            <div className="flex-1  justify-center items-center hidden
            md:flex">
              <div className="border-white border-2 flex rounded-md">
                <MdOutlineSearch className="h-9 w-6"/>
                <input className="h-9 w-64 bg-transparent placeholder:text-white outline-none py-2" placeholder="Search . . ."/>
              </div>
              
            </div>

    </div>}

    {/* Navigation */}
    <div className="w-full h-12 bg-fuchsia-500 fixed bottom-0 flex border-b-4 border-fuchsia-700
    md:hidden">
      <div className="flex-1 flex justify-center items-center cursor-pointer"><MdOutlineSearch className="text-4xl"/></div>
      <div className="flex-1 flex justify-center items-center cursor-pointer"><MdPerson className="text-4xl"/></div>
      <div className="flex-1 flex justify-center items-center cursor-pointer"><MdInfo className="text-4xl"/></div>
      <div className="flex-1 flex justify-center items-center cursor-pointer"><MdMarkunread className="text-4xl"/><span className="w-3 h-3 bg-red-600 rounded-full relative right-3 bottom-3 animate-ping"></span></div>
    </div>




{/*<nav class="bg-white border-gray-200 dark:bg-purple-500">
  <div class="flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vite</span>
  </a>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-purple-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-purple-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-purple-500 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 md:dark:hover:text-black-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>*/}

    </>
    )
}