"use client";

//Imports
import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BiX, BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //add eventListener
    window.addEventListener("scroll", handleScroll);

    //remove event Listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-4" : "bg-background shadow-lg py-2"
      } fixed w-full   mx-auto z-10 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between max-w-[1440px]">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src="/logo.png" width={120} height={60} alt="logo" />
          </Link>
          {/* Mobile Nav Open Menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl text-primary" />
            ) : (
              <BiMenuAltRight className="text-4xl text-primary" />
            )}
          </div>
        </div>
        {/* Nav */}
        <nav
          className={`${
            nav
              ? "max-h-max py-8 px-4 xl:py-0 xl:px-0 "
              : "max-h-0 xl:max-h-max text-secondary"
          } flex flex-col w-full text-primary xl:bg-transparent  gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[18px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="featured"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Featured
          </Link>
          <Link
            className="cursor-pointer"
            to="howtomake"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            How to Make
          </Link>
          <Link
            className="cursor-pointer"
            to="reviews"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Reviews
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
