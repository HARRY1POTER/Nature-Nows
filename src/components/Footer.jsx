import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#D9D9D9] text-center  text-black p-16 gap-2">
      <div className="flex justify-center mb-4">
        <a href="https://facebook.com">
          <FaFacebook className="text-2xl mx-2" />
        </a>
        <a href="https://instagram.com">
          <FaInstagram className="text-2xl mx-2" />
        </a>
        <a href="https://twitter.com">
          <FaTwitter className="text-2xl mx-2" />
        </a>
      </div>
      <p className="text-[16px]">
        Copyright © 2024 Sustainable Transportation - All Rights Reserved.
      </p>
      <div className="flex justify-center p-2">
        <div className="border border-[#3A495E] w-20 mx-auto" />
      </div>

      <p className="text-[20px] font-black">SUSTAINABLE transportation</p>
    </div>
  );
};

export default Footer;
