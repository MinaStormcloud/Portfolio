import React from "react";
import controlLogo from '../media/control.png';
import myPhoto from '../media/ic_launcher.png';

import { useState } from "react";

export default function Navbar() { 
  const [open, setOpen] = useState(false) 
    return(
    <header>
      {
      /* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> */}
      <nav class="flex flex-col fixed bg-blue-900 w-25 h-screen md:h-full md:z-30 tex-gray-900  border-blue-900 z-30 res"> 
        <div className={` ${
          open ? "w-25" : "w-20"
        } bg-dark-blue h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={controlLogo}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-900
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div class="flex flex-wrap">
          <div className="flex gap-x-4 items-center">
            <img src={myPhoto} className={`borderfoto borderfoto-1 cursor-pointer duration-500 w-10 h-10 rounded-full ${
              open  && 'rotate-[360deg] rounded-full w-20 h-20'
            }`}/>           
          </div>
        </div>
        <div class="mt-5 mb-4">
          <ul className="pt-6">
            <li class="mb-2 px-2 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-white   hover:bg-green-600  hover:font-bold square square-lg">
              <span>
                <svg class="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>
              </span>
              <a href="#main">
                <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>Main</span>
              </a>
            </li>
            <li class="mb-2 px-2 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-white   hover:bg-red-500  hover:font-bold square square-lg">
              <span>
              <svg class="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
              </span>
              <a href="#about">
              <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>About me</span>
              </a>
            </li>
            <li class="mb-2 px-2 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-white   hover:bg-blue-600  hover:font-bold square square-lg">
              <span>
              <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
              </span>
              <a href="#projects">
              <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>Projects</span>
              </a>
            </li>
            <li class="mb-2 px-2 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-white   hover:bg-yellow-600  hover:font-bold square square-lg">
              <span>
              <svg class="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </span>
              <a href="#skills">
              <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>Skills</span>
              </a>
            </li>
            <li class="mb-2 px-2 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-white  hover:font-bold square square-lg">
              <span>
              <svg class="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="7" width="18" height="13" rx="2" />  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <path d="M3 13a20 20 0 0 0 18 0" /></svg>
              </span>
              <a href="#resume">
              <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>Resumé</span>
              </a>
            </li>
            <li class="mb-2 px-2 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-teal-400  hover:font-bold square square-lg">
              <span>
              <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
              </span>
              <a href="#contact">
              <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>Contact me</span>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  );
}