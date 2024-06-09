import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import cir from "../../../public/assets/Ellipse 793.png";
import ci from "../../../public/assets/Ellipse 794.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className=" text-center bg-[#f2f2f2] mb-1  p-[45px] ">
        <p className="text-[40px] text-black font-bold">Contact Us</p>
        <p className="text-[18px] text-[#717171]">
          Any question or remarks? Just write us a message!
        </p>
        <div className="bg-white flex flex-col md:flex-row mt-16 mb-12">
          <div className="flex justify-center bg-black m-6 rounded-xl md:w-1/2 ">
            <div className="text-center rounded-lg p-8">
              <p className="text-[28px] font-semibold mb-4">
                Contact Information
              </p>
              <p className="text-[18px] text-[#C9C9C9] mb-8 text-center">
                We&apos;d love to hear from you! Whether you have questions or
                feedback, we&apos;re here to assist you.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="mr-2" />
                  <p className="text-[16px]">+447475 044782</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="mr-2" />
                  <p className="text-[16px]">Joseph.Oni@bcu.ac.uk</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <p className="text-[16px]">4 Cardigan Lane, B4 7BD</p>
                </div>
                <div className=" mt-36">
                  <div className="flex">
                    <a href="https://instagram.com">
                      <FaInstagram className="text-2xl mx-2" />
                    </a>
                    <a href="https://twitter.com">
                      <FaTwitter className="text-2xl mx-2" />
                    </a>

                    <Image
                      src={cir}
                      alt="image"
                      className="sticky top-[51rem] left-[47rem] xsm:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white ml-4 p-8 rounded-lg md:w-1/2">
            <div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="First Name:"
                  className="border border-b-[#8D8D8D] text-[#8D8D8D] border-transparent p-2"
                />
                <input
                  type="text"
                  placeholder="Last Name:"
                  className="border border-b-[#8D8D8D] text-[#8D8D8D] border-transparent p-2"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Email:"
                  className="border border-b-[#8D8D8D] text-[#8D8D8D] border-transparent p-2"
                />
                <input
                  type="number"
                  placeholder="Phone Number:"
                  className="border border-b-[#8D8D8D] text-[#8D8D8D] border-transparent p-2"
                />
              </div>
            </div>
            <div className="text-black mt-6">
              <p className="text-[14px] font-semibold">Select Subject?</p>
              <div className="flex flex-wrap gap-5 mt-3">
                <div>
                  <input
                    type="radio"
                    id="subject1"
                    name="subject"
                    value="subject1"
                  />
                  <label htmlFor="subject1" className="ml-1">
                    General Inquiry
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="subject2"
                    name="subject"
                    value="subject2"
                  />
                  <label htmlFor="subject2" className="ml-1">
                    Customer Support
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="subject3"
                    name="subject"
                    value="subject3"
                  />
                  <label htmlFor="subject3" className="ml-1">
                    Partnerships
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="subject4"
                    name="subject"
                    value="subject4"
                  />
                  <label htmlFor="subject4" className="ml-1">
                    Feedback and Suggestions
                  </label>
                </div>
              </div>

              <input
                type="text"
                placeholder="Write your message.."
                className="border border-b-[#8D8D8D] w-48 md:w-full  text-[#8D8D8D] border-transparent p-2 mt-6  "
              />
            </div>
            <button className="bg-black mt-6  text-white py-2 px-4 rounded-md hover:bg-gray-800">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
