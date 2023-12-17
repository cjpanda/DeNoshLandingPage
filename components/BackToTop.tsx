"use client";

import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const BackToTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed bg-primary hover:bg-primary-hover w-12 h-12 right-10
    bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white rounded-[10px]`}
    >
      <FaChevronUp />
    </Link>
  );
};

export default BackToTop;
