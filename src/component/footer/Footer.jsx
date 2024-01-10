import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const data1 = [
    "About Us",
    "Sitemap",
    "Credits",
    "Help Center",
    "Community Guidelines",
  ];
  const data2 = [
    "Accessibility",
    "Mobile",
    "Marketing",
    "Advertisement",
    "Report Issue",
  ];
  const data3 = ["Privacy Policy", "Terms & Condition", "Trust & Safety"];
  return (
    <div className="bg-white mt-4">
      <div className="w-9/12 mx-auto relative ">
        <div className="sm:flex-col md:flex-col lg:flex-row lg:items-start sm:items-center md:items-center flex justify-between p-4 ">
          <div className="flex flex-col  justify-start">
            <div className="flex">
              <div className="flex flex-col p-2">
                <h1 className="text-black text-xl font-bold ">
                  <span className="text-2xl text-pink-600">F</span>ormEase
                </h1>
                <h1 className="text-black text-[6px] mt-[-4px] font-semibold">
                  Apply with Ease
                </h1>
              </div>
            </div>
            <div className="flex gap-x-4 text-2xl text-gray-600 ">
              <div className="hover:text-black hover:font-extrabold cursor-pointer">
                <FaFacebook />
              </div>
              <div className="hover:text-black hover:font-extrabold cursor-pointer">
                <FaInstagram />
              </div>
              <div className="hover:text-black hover:font-extrabold cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="hover:text-black hover:font-extrabold cursor-pointer">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="flex justify-around w-5/12 text-slate-500  ">
            <div className="text-left">
              {data1 &&
                data1.map((item, key) => (
                  <div
                    className="m-2 p-1 hover:text-black hover:font-semibold  cursor-pointer"
                    key={key}
                  >
                    {item}
                  </div>
                ))}
            </div>
            <div className="text-left">
              {data2 &&
                data2.map((item, key) => (
                  <div
                    className="m-2 p-1 hover:text-black  hover:font-semibold cursor-pointer"
                    key={key}
                  >
                    {item}
                  </div>
                ))}
            </div>
            <div className="text-left">
              {data3 &&
                data3.map((item, key) => (
                  <div
                    className="m-2 p-1 hover:text-black  hover:font-semibold cursor-pointer"
                    key={key}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4 justify-start">
            <div className="flex justify-center items-center bg-[#213b50] cursor-pointer space-x-2 p-1 pr-2 pl-2 rounded-md text-white ">
              <div className="text-3xl p-2 flex justify-center items-center h-[50px] w-[50px]">
                <img src="https://res.cloudinary.com/djum9l80v/image/upload/v1704835799/ijx0mqix3osvmzx9fhig.png" />
              </div>
              <div className="flex flex-col items-start justify-center ">
                <h6 className="text-[10px]">GET IT ON</h6>
                <h4 className="text-2xl mt-[-6px] font-semibold">
                  Google Play
                </h4>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#213b50] cursor-pointer space-x-2 p-1 pr-2 pl-2 rounded-md text-white">
              <div className="text-3xl p-2 flex justify-center items-center h-[50px] w-[50px]">
                <img src="https://res.cloudinary.com/djum9l80v/image/upload/v1704835999/eoq7wjmpg64mwtlobg1m.png" />
              </div>
              <div className="flex flex-col items-start justify-center ">
                <h6 className="text-[10px]">Download on the</h6>
                <h4 className="text-2xl mt-[-6px] font-bold">App Store</h4>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-3xl" />
        <div className="flex flex-col p-4 items-start text-justify text-gray-400 text-sm bg-white">
          <h6>All trademarks are the property of their respective owners</h6>
          <h6>All right reserved &#169; 2024 Intellfill Tech Pvt Ltd.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
