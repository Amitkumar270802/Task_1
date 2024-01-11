import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const ExamCard = (props) => {
  const data = ["Engineering", "IIT", "PCM"];
  const [bookmark, setBookmark] = useState(1);

  let exams = props.data;
  return (
    <div className="flex  mx-auto ">
      <div className="flex justify-center gap-5 items-center mx-auto m-4">
        {exams &&
          exams.map((item, key) => (
            <div
              className="shadow-slate-200 shadow-lg bg-white border border-gray-300 rounded-xl bg-smoke p-4 flex  flex-col h-[300px] sm:w-[300px] w-[332px]  "
              key={key}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-between ">
                <div className="flex justify-between items-center  p-1">
                  <div className="h-[40px] w-[40px] border border-gray-300 p-1 rounded-lg ">
                    <img src={item.image} />
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 ">
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <h6 className="text-gray-400 text-[14px]">
                      {item.organiser}
                    </h6>
                  </div>
                </div>
                <div
                  className="text-xl flex   text-[#246bfd] cursor-pointer"
                  onClick={() => setBookmark(!bookmark)}
                >
                  {bookmark ? <CiBookmark /> : <IoBookmark />}
                </div>
              </div>
              <hr />
              <div className="mx-auto">
                <div className="flex flex-col items-start justify-start ml-[-60px] ">
                  <div className="flex justify-center items-center ">
                    <div className=" text-3xl p-2">
                      <MdGroups />
                    </div>
                    <h4>{item.participants}</h4>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className=" text-3xl p-2">
                      <RiWallet3Fill />
                    </div>
                    <h4> &#8377; {item.fee}</h4>
                  </div>
                  <div className="flex gap-x-2 p-2">
                    {data &&
                      data.map((item, key) => (
                        <div
                          className=" p-2 text-xs rounded-lg border border-gray-400 text-gray-400 "
                          key={key}
                        >
                          {item}
                        </div>
                      ))}
                  </div>
                  <div className="flex  mt-3 hover:cursor-pointer hover:scale-105">
                    <Link
                      to="/exam"
                      className="text-[#246bfd]  ml-3 flex justify-center items-center"
                    >
                      <div>View Details</div>
                      <div className="text-[14px] text-[#246bfd] font-extrabold p-2">
                        <MdArrowForwardIos />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ExamCard;
