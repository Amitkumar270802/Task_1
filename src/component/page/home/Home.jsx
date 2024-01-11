import React, { useState } from "react";
import ExamCard from "./ExamCard";
import recommendedExam from "../../../assets/recommendedExam";
import recentExams from "../../../assets/recentExam";
import bannerData from "../../../assets/bannerData";
import Card from "./Card";
import { LuChevronRight } from "react-icons/lu";
import { GoChevronLeft } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";


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
    <div className="w-9/12 mx-auto p-5 " >
      {/* banner  */}
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

      {/* Recommended Exams  */}
      <div className="flex flex-col items-start mt-4 p-2" data-aos="fade-up">
        <div className="p-1 flex justify-between w-full">
          <h1 className="text-xl font-bold">Recommended exams</h1>
          <h1 className="text-base text-[#246bfd] hover:cursor-pointer">
            See All
          </h1>
        </div>
        <div className="relative w-full " >
          <div className="overflow-auto scroll-smooth">
            <ExamCard data={recommendedExam} />
          </div>
          <div className="bg-slate-100 w-screen h-[40px] absolute bottom-[-10px]"></div>
        </div>
      </div>

      {/* Recent Exams  */}
      <div className="flex flex-col items-start mt-4 p-2">
        <div className="p-1 flex justify-between w-full ">
          <h1 className="text-xl font-bold ">Recent exams</h1>
          <h1 className="text-base text-[#246bfd] hover:cursor-pointer">
            See all
          </h1>
        </div>
        <div className=" flex justify-start sm:justify-center xl:justify-between items-center w-full flex-wrap ">
          <div className="flex  items-center p-4 hover:scale-105 cursor-pointer">
            <p className="bg-[#246bfd] min-w-20 text-xs text-center font-bold text-[#ffffff] rounded-full  border border-[#246bfd] p-[14px]">
              All
            </p>
          </div>
          {data &&
            data.map((item, key) => (
              <div
                key={key}
                className="flex justify-around p-4 hover:scale-105 cursor-pointer  "
              >
                <p className="text-[#246bfd] min-w-20 text-xs text-center font-bold bg-[#ffffff] rounded-full  border border-[#246bfd] p-[14px] ">
                  {item}
                </p>
              </div>
            ))}
        </div>
        <div className="relative w-full ">
          <div className="overflow-auto scroll-smooth">
            <ExamCard data={recentExams} />
          </div>
          <div className="bg-slate-100 w-screen h-[40px] absolute bottom-[-10px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
