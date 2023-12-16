"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { footerLinks } from "@/constants";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col text-primary mt-5 border-t border-gray-100 bg-white">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        {/* Logo and Text */}
        <div className="flex flex-col justify-start items-start gap-6">
          <Link to="home" smooth={true} spy={true} className="cursor-pointer">
            <Image
              src="/logo.png"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
          <p className="text-primary">
            Denosh Cassava Flour 2023 <br />
            All rights reserved &copy;
          </p>
          <div className="flex flex-col gap-y-4 font-semibold">
            <div className="flex items-center gap-x-[10px]">
              <FaPhone />
              <p className="font-medium">080 37639586</p>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <FaEnvelope />
              <p className="font-medium">support@denosh.com</p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className="text-secondary cursor-pointer"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between 
        items-center flex-wrap mt-10 border-t border-gray-100 
        sm:px-16 px-6 py-10"
      >
        <p>@2023 DeNosh. All Rights Reserved Designed By CjPanda</p>

        <div className="footer__copyrights-link">
          <Link to="home" smooth={true} spy={true} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link to="home" smooth={true} spy={true} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
