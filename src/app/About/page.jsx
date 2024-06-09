import Image from "next/image";
import React from "react";
import Im from "../../../public/assets/06.png";
import Img from "../../../public/assets/01.png";
import Ima from "../../../public/assets/12.png";
import frame from "../../../public/assets/Frame 19.png";
import fram from "../../../public/assets/Frame 34.png";

const About = () => {
  const data = [
    {
      src: Im,
      title: "Clean Mobility",
      content:
        "Efficient, green transit planning encouraging sustainable, urban mobility.",
    },
    {
      src: Ima,
      title: "Smart Transit",
      content:
        " Utilizing technology for sustainable, and interconnected urban mobility",
    },
    {
      src: Img,
      title: "Greener Journeys",
      content:
        "Environmentally friendly travel choices promoting sustainability and safety.",
    },
  ];
  return (
    <>
      <div className="font-semibold text-black text-3xl lg:text-5xl p-8 lg:p-16 bg-white ">
        <p className="mb-3">What is Sustainable</p>
        <p>Transportation really about?</p>

        <div className="gap-14  flex flex-col items-center justify-center mt-20 md:flex-row md:justify-center ">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer xsm:p-10 "
            >
              <Image src={item.src} alt={item.title} className="" />
              <div className="text-center mt-5">
                <p className="text-2xl lg:text-[32px] font-semibold">
                  {item.title}
                </p>
                <p className="text-lg font-light lg:text-[20px] mt-3">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image src={frame} alt="frame" className="w-full" />
      <div className="text-white p-8 md:p-16">
        <p className="text-[24px] lg:text-[64px] font-semibold text-center mb-8 ">
          What does this mean for the future?
        </p>
        <p className="text-[20px] lg:text-[36px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Image src={fram} alt="frame" className="w-full mb-1 mt-8" />
    </>
  );
};

export default About;
