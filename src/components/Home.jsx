import React from "react";
import Africa from "../../public/assets/Africa.png";
import Image from "next/image";
import image2 from "../../public/assets/image 2.png";
import image4 from "../../public/assets/image 4.png";
import image5 from "../../public/assets/image 5.png";
import Rectangle27 from "../../public/assets/Rectangle 27.png";

const Page = () => {
  return (
    <div className="bg-white">
      <div className="h-screen flex flex-col lg:flex-row justify-center items-center ">
        <div className="md:relative lg:order-2  lg:mt-0 mt-12">
          <Image
            src={Africa}
            alt="Image"
            className="lg:mt-24 lg:block md:hidden "
            height={1017}
            width={1300}
          />
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left lg:max-w-lg md:ml-4 lg:ml-64  md:mt-0 xsm:mt-0">
          <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-7xl mb-4 ">
            Go
          </h1>
          <h1 className="text-[#01AB12] font-bold text-4xl md:text-5xl lg:text-7xl mb-4">
            Green.
          </h1>
          <p className="text-black text-lg md:text-xl lg:text-2xl mb-8">
            Empowering Eco-Friendly Journeys through Sustainable Transportation
            Solutions
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start  ">
            <button className="bg-black text-white text-lg md:text-lg lg:text-xl px-8 py-4 rounded-full mb-4 md:mb-0 ">
              Learn More
            </button>
            <button className="bg-black text-white text-lg md:text-lg lg:text-xl  px-8 py-4 rounded-full mb-4 md:mb-0">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-20 lg:mt-0">
        <Image src={Rectangle27} alt="image" className="w-full" />
        <label className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-2xl lg:text-5xl text-white">
          Your journey to Sustainable Transportation
        </label>
      </div>

      <div className="mt-20 lg:mt-10 mx-4 lg:mx-24 flex flex-col lg:flex-row items-center pb-16">
        <div className="flex-shrink-0">
          <Image src={image2} alt="Image" className="w-full" />
        </div>
        <div className="lg:ml-8 mt-6 lg:mt-0 text-center lg:text-left">
          <p className="font-semibold text-center text-2xl lg:text-5xl text-black mb-4">
            Green Roads Ahead
          </p>
          <p className="font-extralight text-center text-xl lg:text-4xl text-black">
            Driving a sustainable future through eco-friendly transportation
            solutions and innovation.
          </p>
        </div>
      </div>

      <div className="mt-20 lg:mt-10 mx-4 lg:mx-24 flex flex-col-reverse lg:flex-row items-center pb-16">
        <div className="lg:mr-8 mt-6 lg:mt-0 text-center lg:text-left xsm:order-2">
          <p className="font-semibold  text-center text-2xl lg:text-5xl text-black mb-4">
            Stride into Sustainability
          </p>
          <p className="font-extralight text-center text-xl lg:text-4xl text-black">
            Green Steps Toward Eco-Friendly Walking Solutions
          </p>
        </div>
        <div className="flex-shrink-0 xsm:order-1 lg:ml-40">
          <Image src={image4} alt="Image" className="w-full " />
        </div>
      </div>

      <div className="mt-20 lg:mt-10 mx-4 lg:mx-24 flex flex-col lg:flex-row items-center pb-16">
        <div className="flex-shrink-0">
          <Image src={image5} alt="Image" className="w-full" />
        </div>
        <div className="lg:ml-8 mt-6 lg:mt-0 text-center lg:text-left">
          <p className="font-semibold text-center text-2xl lg:text-5xl text-black mb-4">
            Green Transit
          </p>
          <p className="font-extralight text-center text-xl lg:text-4xl text-black">
            Embark on eco-conscious journeys with our sustainable bus solutions.
            Redefining transportation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
