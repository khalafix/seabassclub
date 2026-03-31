"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { useState } from "react";
import SearchbarArea from "@/common/SearchbarArea";
import UseSticky from "@/hooks/UseSticky";
import Image from "next/image";

export default function HeaderTwo() {
   const {sticky} = UseSticky();

   const [searchOpen, setSearchOpen] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <header className={`header-section style-two ${isOpen ? "mobile-menu-open" : ""} ${sticky ? "sticky-on" : ""}`}>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-xl">
               {/* <!-- Navbar Brand --> */}
               <Link className="navbar-brand" href="/home-2">
                  <Image className="d-none d-sm-block w-auto h-auto" src="/assets/img/core-img/logo-five.png" alt="" width={1920} height={1080} priority/>
                  <Image className="d-block d-sm-none w-auto h-auto" src="/assets/img/core-img/logo-sm-two.png" alt="" width={1920} height={1080} priority/>
               </Link>

               {/* <!-- Navbar Toggler --> */}
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#startixNav"
                  aria-controls="startixNav" aria-label="Toggle navigation" onClick={toggleMenu} aria-expanded={isOpen}>
                  <i className="ti ti-menu-deep"></i>
               </button>

               {/* <!-- Navbar Nav --> */}
               <div className={`collapse justify-content-xl-center navbar-collapse ${isOpen ? "show" : ""}`} id="startixNav">

                  <Navmenu />

               </div>

               {/* <!-- Header Navigation --> */}
               <div className="header-navigation d-flex flex-wrap align-items-center">
                  {/* <!-- Search Button --> */}
                  <div className="header-search-btn" id="searchButton">
                     <button onClick={() => setSearchOpen(!searchOpen)} className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path
                              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                              fill="#161616" />
                        </svg>
                     </button>
                  </div>

                  {/* <!-- Get A Quote --> */}
                  <a className="btn btn-primary" href="#">
                     <span>Sign Up <i className="d-none d-sm-block ti ti-arrow-up-right"></i></span>
                     <span>Sign Up <i className="d-none d-sm-block ti ti-arrow-up-right"></i></span>
                  </a>
               </div>
            </nav>
         </header>
         <SearchbarArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      </>
   )
}