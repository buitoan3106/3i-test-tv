"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import MainMenu from "./MainMenu";
import HeaderTools from "./HeaderTools";

import { GetMenuData,GetLanguage } from "../../apis/GetDataHome";
import NavToggle from "./NavToggle";

const Header = () => {  
  const [dataMenu, setDataMenu]= useState([]);
  const [languageData, setLanguageData]= useState([]);

  const dataMenuFetch = async () => {
    try {
      const res = await GetMenuData();
      const resLanguage = await GetLanguage();
      setDataMenu(res.data);
      setLanguageData(resLanguage.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    dataMenuFetch();
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
      if  (window.innerWidth <= 1199 ){
      setNavbarOpen(!navbarOpen);
      document.querySelector('body').classList.toggle('NavOpen');
      }
  };

  return (
    <>
      <header
        id="Header"
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-[green] dark:!bg-opacity-20"
            : "absolute"
        } h-[${72}px]`}
      >
        <div className="w-full px-[20px]">
          <div className={`relative -mx-4 flex items-center justify-between ${sticky ? "animate-fadeInUp" : "py-0"}`}>
            <NavToggle navbarToggleHandler={navbarToggleHandler} navbarOpen={navbarOpen}/>
            <Logo/>
            <MainMenu dataMenu={dataMenu} navbarOpen={navbarOpen} navbarToggleHandler={navbarToggleHandler}/>
            <HeaderTools languageData={languageData}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;