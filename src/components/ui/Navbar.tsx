import { GoChevronDown } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { Fa500Px } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import Search from "./Search";
import Button from "./Button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for sticky effect — disabled if menu is open
  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        const triggerPoint = window.innerHeight * 0.1; // 40% of viewport
        setIsSticky(window.scrollY > triggerPoint);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Stop page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav>
      {/* Navbar Container Desktop Starts */}
      <div
        className={`flex justify-between items-center px-4 py-4 lg:px-8 lg:py-5 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-white"
            : "mx-4 mt-4 bg-[#F0EFE9]"
        }`}
      >
        {/* Logo Starts */}
        <div className="flex items-center text-4xl lg:text-5xl">
          <Fa500Px className="text-primary" />
          <span className="font-spaceGrotesk font-bold">SAOR</span>
        </div>
        {/* Logo Ends */}

        {/* NavLinks Starts */}
        <div className="hidden md:block ">
          <ul className="flex md:space-x-6 lg:space-x-10 font-kanit text-[1rem]">
            <li>
              <a href="#" className="flex items-center">
                <span>Home</span>
                <GoChevronDown className="mt-1" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>Portfolio</span>
                <GoChevronDown className="mt-1" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>Pages</span>
                <GoChevronDown className="mt-1" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>Blog</span>
                <GoChevronDown className="mt-1" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        {/* NavLinks Ends */}

        {/* Search Btn and Quote Btn Starts */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Search Btn Starts */}
          <div>
            <Search />
          </div>
          {/* Search Btn Ends */}
          {/* Quote Btn Starts */}
          <Button />
          {/* Quote Btn Ends */}
        </div>
        {/* Search Btn and Quote Btn Ends */}

        {/* Humbuger Menu Starts */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <HiOutlineMenu />
        </button>
        {/* Humbuger Menu Ends */}
      </div>
      {/* Navbar Container Desktop Ends */}

      {/* Mobile Version Starts */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col items-center">
          <button
            className="fixed top-5 right-5 z-50 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* Links */}
          <ul className="flex flex-col gap-4 mt-16 font-kanit text-[1rem]">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      {/* Mobile Version Ends */}
    </nav>
  );
};

export default Navbar;
