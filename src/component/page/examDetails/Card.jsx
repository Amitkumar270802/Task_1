import React from "react";
import { MdArrowForwardIos, MdGroups } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";

const Card = (props) => {
  const exams = props.data;
  return (
    <div className="flex w-11/12  flex-col mx-auto">
      {exams &&
        exams.map((item, key) => (
          <div className="flex flex-col  " key={key}>
            <div className="flex items-center justify-between ">
              <div className="flex justify-between items-center p-1">
                <div className="h-[30px] w-[30px] border border-gray-300 p-1 rounded-lg ">
                  <img src={item.image} />
                </div>
                <div className="flex flex-col items-start p-2 ">
                  <h4 className="font-extrabold text-sm">{item.name}</h4>
                  <h6 className="text-gray-400 text-sm">{item.organiser}</h6>
                </div>
              </div>
            </div>
            <div className=" mt-[-14px] ">
              <div className="flex flex-col items-start justify-start ">
                <div className="flex justify-start items-center">
                  <div className="p-2 text-lg text-gray-400">
                    <MdGroups />
                  </div>
                  <h4 className="text-sm">{item.participants}</h4>
                </div>

                <div className="flex justify-between items-center w-full mb-4">
                  <div className="flex justify-center items-center ">
                    <div className="p-2 text-lg  text-gray-400">
                      <RiWallet3Fill />
                    </div>
                    <h4 className="text-sm"> &#8377; {item.fee}</h4>
                  </div>
                  <div className="flex justify-start items-center cursor-pointer hover:scale-105 hover:font-semibold">
                    <div className="text-[#246bfd]">View Details</div>
                    <div className="text-[14px] text-[#246bfd] font-extrabold p-2">
                      <MdArrowForwardIos />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Card;
