import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const [notification, setNotification] = useState(0);
  return (
    <div className="bg-white ">
      <div className="w-9/12 mx-auto ">
        <div className="flex justify-between p-4 items-center ">
          <div className="flex">
            <div className="flex flex-col p-2">
              <h1 className="text-black text-xl font-bold ">
                <span className="text-2xl text-pink-600">F</span>ormEase
              </h1>
              <div className="relative bg-gray-700 h-[2px]  flex justify-center rounded-full">
                <h1 className="absolute top-[-7px] text-center p-1 text-black text-[6px] bg-white  font-semibold">
                  APPLY WITH EASE
                </h1>
              </div>
            </div>
          </div>
          <Link to="/" className="text-lg font-semibold text-[#246bfd]">
            Home
          </Link>
          <Link className="text-lg font-semibold">Result</Link>
          <Link className="text-lg font-semibold">FAQ</Link>
          <Link className="text-lg font-semibold">About Us</Link>
          <Link className="text-lg font-semibold">Contact Us</Link>
          <div className="relative flex  p-2 items-center gap-x-4">
            <CiSearch className="absolute left-5 text-gray-500" />
            <input
              type="search"
              placeholder="search exam here"
              className="text-lg capitalize border rounded-r-full  rounded-l-full outline-none pl-10 border-[#246bfd] h-[30px]"
            ></input>
            <div
              className="text-[30px] text-[#246bfd] cursor-pointer"
              onClick={() => setNotification(!notification)}
            >
              {notification ? (
                <IoMdNotifications />
              ) : (
                <IoIosNotificationsOutline />
              )}
            </div>
            <div className="rounded-full h-[40px] w-[40px] ">
              <img src="https://res.cloudinary.com/djum9l80v/image/upload/v1704834776/tpoyajwz3k6izjdmp5oq.png" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
