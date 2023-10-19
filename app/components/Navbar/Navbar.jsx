"use client";
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { useState } from 'react';
import {BeakerIcon,Bars3Icon,BarProp} from '@heroicons/react'
import MenuOverlay from './MenuOverlay';

function Navbar() {
    const navLink = [
        {
            title: "About",
            path:"#about"
        },
        {
            title: "My Projects",
            path:"#projects"
        },
        {
            title: "Contacts",
            path:"#contacts"
        }
    ]
    const [navbarOpen, SetNavbarOpen] = useState(false);
 
  return (
      <div>
          <nav className="fixed left-0 right-0 top-0 z-10 bg-[#655148] bg-opacity-100 h-[65px]">
              <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1 lg:py-4">
                  <Link href={"/"} className="md:text-4xl text-3xl text-gray-800 font-extrabold ">Logo</Link>
                  <div className="subMenu block md:hidden ">
                      {
                          !navbarOpen ? (
                              <button onClick={() => SetNavbarOpen(true)} className=" text-gray-900 flex items-center px-3 py-2 border rounded border-gray-700 hover:text-gray-400 hover:border-gray-400 mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                              </button>
                          ) : (
                                  <button onClick={() => SetNavbarOpen(false)} className=" text-gray-900 flex items-center px-3 py-2 border rounded border-gray-700 hover:text-gray-400 hover:border-gray-400 mt-1">
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                                  </button>
                          )
                      }
                  </div>
                  <div className="menu hidden md:block md:w-auto" id="navbar">
                      <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
                          {
                              navLink.map((link, index) => (
                                  <li key={index}>
                                      <NavLink href={link.path} title={link.title}/>
                                  </li>
                              ))
                         }
                      </ul>
                  </div>
              </div>
              {
                  navbarOpen ? <MenuOverlay links={navLink}/>
 : null              }
          </nav>
    </div>
  )
}

export default Navbar