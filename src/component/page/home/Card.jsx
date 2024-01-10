import React from "react";

const Card = (props) => {
  const pro = props.data;
  return (
    <div className="flex justify-center items-center">
      <div className="text-black font-bold border border-black ">
        <img src={pro.image}  />
      </div>
    </div>
  );
};

export default Card;
