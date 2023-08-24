"use client"
import { StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import React from "react";
import { render } from "storyblok-rich-text-react-renderer";

const Footer = ({ blok }) => {
  // console.log("footer", blok);
  return (
    <div className="footer bg-[#d9bca9] pt-9">
      <div className="md:max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="relative">
            <Image src={blok?.logo.filename} alt="" width={250} height={200} />
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-5 mt-5 lg:mt-0">
            {blok?.footer.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-3 mt-9 text-xs text-center text-white bg-black">{render(blok?.copyright)}</div>
    </div>
  );
};

export default Footer;
