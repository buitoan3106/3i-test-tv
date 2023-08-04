import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs";

import { handleItemNavBar } from "../../utils/util";
import menuData from "./menuData";
import menuMobileBg from "@/public/images/menu/map_menu.jpg";

const MainMenu = ({dataMenu, navbarOpen, navbarToggleHandler}) => {
    // submenu handler
    const [openIndex, setOpenIndex] = useState(-1);
    const handleSubmenu = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };
    
    return (
        <nav
            id="navbarCollapse"
            className={`max-[1200px]:overflow-y-auto bg-nav-mobile xl:bg-none navbar fixed top-[60px] xs:top-[80px] md:top-[90px] lg:top-[100px] right-0 bottom-0 z-30 ease border-body-color/50 bg-white px-4 py-4 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
            navbarOpen
                ? "visibility left-[0] opacity-100"
                : "invisible left-[-100%] opacity-0"
            }`}
        >
            <ul className="block xl:flex items-center xl:space-x-[20px]">
            {dataMenu.map((menuItem, index) => (
                <li key={menuItem.id} className="group relative">
                {menuItem.title ? (
                    <>
                    {menuItem?.children.length > 0 ? (
                        <span
                        onClick={() => handleSubmenu(index)}
                        className={`w-full flex items-center justify-between py-3 text-base xl:text-[12px] 2xl:text-base text-white xl:text-dark group-hover:text-[green] cursor-pointer uppercase font-bold dark:text-white xl:mr-0 xl:inline-flex xl:py-6 xl:px-0`}
                        >
                        {menuItem.title}
                        <BsChevronDown size={16} className="ml-[7px] font-bold"/>
                        </span>
                    ) : (
                        <Link
                            href={`/${handleItemNavBar(
                                menuItem.multiple_language
                            )}`}
                            className={`flex py-2 text-base xl:text-[12px] 2xl:text-base text-white xl:text-dark group-hover:text-[green] cursor-pointer uppercase font-bold dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 pointer`}
                        >
                        {menuItem.title}
                        </Link>
                    )}

                    {menuItem?.children.length > 0 && (
                        <div
                            className={`submenu relative top-full left-0 rounded-b-md pl-[20px] bg-none xl:bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                            }`}
                        >
                            {menuItem?.children.map((submenuItem) => (
                                <Link
                                onClick={navbarToggleHandler}

                                href={`/${handleItemNavBar(
                                    menuItem.multiple_language
                                )}/${submenuItem.first_id === -1 ?String(submenuItem.id): String(submenuItem.first_id)}`}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm text-white xl:text-dark hover:text-[green] font-semibold dark:text-white lg:px-3"
                                >
                                {submenuItem.title}
                                </Link>
                            ))}
                        </div>
                    )}
                    </>
                ) : (
                    <Link
                        href="/"
                        onClick={() => handleSubmenu(index)}
                        className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                    >
                        {menuItem.title}
                        <span className="pl-3">
                            <BsChevronDown size={16} className="ml-[7px] font-bold" />
                        </span>
                    </Link>
                )}
                </li>
            ))}
            </ul>
        </nav>
);
}

export default MainMenu;