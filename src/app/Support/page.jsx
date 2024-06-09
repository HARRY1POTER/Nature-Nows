import Image from "next/image";
import React from "react";
import img from "../../../public/assets/Rectangle 3845.png";

const Support = () => {
  const data = [
    {
      title: "What sustainable transportation options do you offer?",
    },
    {
      title: "Why should I consider sustainable transportation?`",
    },
    {
      title: "What are the benefits of using electric vehicles?",
    },
    {
      title: "What is the role of public transportation in sustainability?",
    },
    {
      title: "What is the environmental impact of ridesharing and carpooling?",
    },
  ];
  return (
    <>
      <div className="mb-1">
        <div className="relative">
          <Image src={img} alt="Image" className="w-full" />
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center items-start text-white p-4 md:p-8 lg:p-16">
            <h1 className="text-[14px] md:text-4xl lg:text-6xl font-extrabold mb-2 md:mb-4">
              Hello,
            </h1>
            <h2 className="text-[14px] md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
              How can we help?
            </h2>
            <p className="text-[9px] md:text-lg lg:text-xl max-w-md mb-4">
              We offer 24-hour support to attend to your needs.
            </p>
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Search"
                style={{ backgroundColor: "rgba(255,255,255,0)" }}
                className="md:w-full w-40 border border-gray-100 placeholder:text-gray-100 rounded-full p-1 md:px-6 px-4  md:py-4 placeholder-black text-base md:text-lg focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="bg-white text-black p-8 md:p-20 px-4 md:px-40">
          <p className="font-extrabold text-3xl md:text-5xl mb-8">
            Frequently Asked Questions
          </p>
          <div className="flex flex-col md:flex lg:flex-row lg:gap-5">
            <div className="w-full sm:order-last">
              {data.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="border border-gray-300 rounded-xl p-4">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full sm:order-12">
              <div className="bg-gray-200 rounded-3xl p-4 md:p-8">
                <p className="font-semibold mb-4">
                  How can I influence sustainable transportation in my
                  community?
                </p>
                <p>
                  By engaging in local initiatives and advocating for better
                  public transportation options, you can promote and encourage
                  discussions about sustainable transportation within your
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
