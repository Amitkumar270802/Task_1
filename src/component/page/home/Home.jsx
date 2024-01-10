import React, { useState } from "react";
import ExamCard from "./ExamCard";
import recommendedExam from "../../../assets/recommendedExam";
import recentExams from "../../../assets/recentExam";
import bannerData from "../../../assets/bannerData";
import Card from "./Card";
import { LuChevronRight } from "react-icons/lu";
import { GoChevronLeft } from "react-icons/go";
const Home = () => {
  let pro = bannerData;
  const [index, setIndex] = useState(0);

  function left() {
    if (index - 1 < 0) setIndex(pro.length - 1);
    else setIndex(index - 1);
  }
  function right() {
    if (index + 1 >= pro.length) setIndex(0);
    else setIndex(index + 1);
  }
  const data = [
    "Gate",
    "AP EAPCET",
    "BITSAT",
    "JEE Mains",
    "JEE Advance",
    "TS EAMCET",
    "Amity JEE",
  ];
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="w-9/12 mx-auto p-5">
        <div className="flex w-full bg-black justify-center items-center  rounded-r-3xl rounded-l-3xl h-[200px] ">
          <div>
            <button
              className=" hover:scale-105 xl:text-4xl text-2xl text-slate-500  bg-slate-200 h-[70px]"
              onClick={left}
            >
              <GoChevronLeft />
            </button>
          </div>
          <div className="bg-black w-full">
            <Card data={pro[index]} />
          </div>
          <div>
            <button
              className=" hover:scale-105 xl:text-4xl  text-2xl text-slate-500 bg-slate-200 h-[70px] "
              onClick={right}
            >
              <LuChevronRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start mt-4 p-2">
          <div className="p-1 flex justify-between w-full">
            <h1 className="text-xl font-bold">Recommended exams</h1>
            <h1 className="text-base text-[#246bfd] hover:cursor-pointer">
              See All
            </h1>
          </div>
          <ExamCard data={recommendedExam} />
        </div>
        <div className="flex flex-col items-start mt-4 p-2">
          <div className="p-1 flex justify-between w-full ">
            <h1 className="text-xl font-bold ">Recent exams</h1>
            <h1 className="text-base text-[#246bfd] hover:cursor-pointer">
              See all
            </h1>
          </div>
          <div className=" flex justify-start  w-full flex-wrap items-start">
            <div className="flex justify-around p-4 hover:scale-105 cursor-pointer">
              <p className="bg-[#246bfd] text-xs text-center font-bold text-[#ffffff] rounded-full  border border-[#246bfd] p-[15px]  ">
                All
              </p>
            </div>
            {data &&
              data.map((item, key) => (
                <div
                  key={key}
                  className="flex justify-around p-4 hover:scale-105 cursor-pointer"
                >
                  <p className="text-[#246bfd] text-xs text-center font-bold bg-[#ffffff] rounded-full  border border-[#246bfd] p-[15px] ">
                    {item}
                  </p>
                </div>
              ))}
          </div>
          <ExamCard data={recentExams} />
        </div>
      </div>
    </div>
  );
};

export default Home;
