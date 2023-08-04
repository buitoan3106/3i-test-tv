const NavToggle = ({ navbarToggleHandler, navbarOpen }) => {
    return (
        <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="inline-block rounded-lg px-4 focus:color-[green] xl:hidden"
        >
            <span
            className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? " top-[7px] rotate-45" : " "
            }`}
            />
            <span
            className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "opacity-0 " : " "
            }`}
            />
            <span
            className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? " top-[-8px] -rotate-45" : " "
            }`}
            />
        </button>
    );
}

export default NavToggle;