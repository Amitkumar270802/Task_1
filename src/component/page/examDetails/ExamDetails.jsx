import React, { useState } from "react";
import Card from "./Card.jsx";
import { CiBookmark } from "react-icons/ci";
import {
  FaArrowLeft,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import intrestedExam from "../../../assets/intrestedExam.js";
import { MdGroups } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
const ExamDetails = () => {
  const [bookmark, setBookmark] = useState(1);
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="w-9/12 mx-auto">
        {/* back button */}
        <div className="flex p-4">
          <div>
            <Link to="/">
              <div className="flex gap-x-4 justify-center items-center hover:scale-105 hover:text-[#246bfd]">
                <div className="text-xl  ">
                  <FaArrowLeft />
                </div>
                <p className="text-xl ">Back</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 2 part  */}
        <div className="flex flex-wrap ">
          <div className="lg:w-7/12 p-4 ">
            <div className="flex flex-col gap-y-5  ">
              <div className=" bg-white rounded-xl p-4 flex flex-col shadow-sm shadow-gray-500  ">
                <div className="flex items-center justify-between ">
                  <div className="flex justify-between items-center  p-1">
                    <div className="h-[40px] w-[40px] border border-gray-300 p-1 rounded-lg ">
                      <img src="https://res.cloudinary.com/djum9l80v/image/upload/v1704833936/qr5m50rkmfcmtidkuvdl.jpg" />
                    </div>
                    <div className="flex flex-col items-start p-2 ">
                      <h4 className="font-bold text-xl">JEE Mains 2023</h4>
                      <h6 className=" text-[#246bfd] text-sm">
                        National Testing Agency
                      </h6>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div
                      className="text-2xl flex text-[#246bfd] cursor-pointer hover:scale-105"
                      onClick={() => {
                        setBookmark(!bookmark);
                      }}
                    >
                      {bookmark ? <CiBookmark /> : <FaBookmark />}
                    </div>
                    <div className="text-2xl flex text-black cursor-pointer hover:scale-105">
                      <IoMdShare />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex flex-col items-start justify-start  ">
                    <div className="flex justify-center items-center ">
                      <div className="text-[#246bfd]  text-xl p-2">
                        <MdOutlineDateRange />
                      </div>
                      <h4>Exam Date : 23 March 2023</h4>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="text-[#246bfd] text-xl p-2 ">
                        <MdGroups />
                      </div>
                      <h4> Applicants: 2 lakh+</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between  items-center mt-2">
                    <div className="text-gray-500 ml-3 text-justify">
                      Posted 50 days ago , end on 31 Dec
                    </div>
                    <div className="sm:p-1 md:p-2 text-sm p-3 m-2 bg-[#246bfd] rounded-3xl cursor-pointer hover:scale-105 hover:font-bold shadow-md shadow-black text-white">
                      Apply now
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white p-4 rounded-xl shadow-sm shadow-gray-500">
                <div className="">
                  <div className="text-justify ">
                    <h3 className="text-2xl font-semibold">
                      Exam Description:
                    </h3>
                    <ul className="p-6 ml-[10px]">
                      <li className="list-disc  text-lg">
                        JEE Main is a standardized test conducted across
                        different states in India.
                      </li>
                      <li className="list-disc  text-lg">
                        he exam is held at an undergraduate level to offer
                        admissions o some of the best engineering and technical
                        institutions that re Government funded or
                        privately-owned.
                      </li>
                      <li className="list-disc  text-lg">
                        The exam conducting authority considers the best NTA
                        score in preparing the ranks/merit list
                      </li>
                    </ul>
                  </div>
                  <div className="text-justify ">
                    <h3 className="text-2xl font-semibold">Eligibility:</h3>
                    <ul className="p-6 ml-[10px]">
                      <li className="list-disc  text-lg">
                        Age Limit - No age limit
                      </li>
                      <li className="list-disc  text-lg">
                        Qualifying Exam - Class 12/Equivalent Exam
                      </li>
                      <li className="list-disc  text-lg">
                        Percentage - At least 75% in class 12/equivalent exam
                      </li>
                      <li className="list-disc  text-lg">
                        Year of Passing - 2021,2022 or appearing in 2023
                      </li>
                      <li className="list-disc  text-lg">
                        Number of attempts - Candidate can appear in JEE Main
                        for 3 consecutive years after passing their class
                        12/equivalent exam
                      </li>
                    </ul>
                  </div>
                  <div className="text-justify ">
                    <h3 className="text-2xl font-semibold">
                      Important Details:
                    </h3>
                    <ul className="p-6 ml-[10px]">
                      <li className="list-disc  text-lg">
                        JEE Main 2023 January Session NTA released the JEE Main
                        2023 session I will be conducted between 24th January
                        and 1st 2023
                      </li>
                      <li className="list-disc  text-lg">
                        JEE 2023 April Session NTA released the JEE Man 2023
                        session I will be conducted between 1st April. 2023 and
                        15th April. 2023
                      </li>
                      <li className="list-disc  text-lg">
                        The exam conducting authority considers the best NTA
                        score in preparing the ranks/merit list
                      </li>
                    </ul>
                  </div>
                  <hr />
                </div>
                <div className="flex justify-between items-center p-2">
                  <div className="flex p-2 gap-x-2">
                    <div className="text-2xl hover:scale-105 cursor-pointer">
                      <FaSquareFacebook color="#246bfd" />
                    </div>
                    <div className="text-2xl hover:scale-105 cursor-pointer">
                      <FaSquareXTwitter />
                    </div>
                    <div className="text-2xl hover:scale-105 cursor-pointer">
                      <FaLinkedin color="#0a66c2" />
                    </div>
                  </div>
                  <div className="text-[#246bfd] cursor-pointer hover:font-semibold ">
                    Report this job
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-5/12 ">
            <div className="bg-white p-4 rounded-xl h-fit flex flex-col shadow-sm shadow-gray-500 ">
              <div className="text-justify">
                <h2 className=" font-semibold text-xl">
                  Exams you might be interested in
                </h2>
              </div>
              <Card data={intrestedExam} />
              <div className="flex justify-center p-2 hover:scale-105 cursor-pointer">
                <div className="bg-[#246bfd] items-center rounded-full p-[2px] ">
                  <p className="text-[#246bfd] font-bold bg-[#ffffff] rounded-full p-2">
                    View all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetails;
