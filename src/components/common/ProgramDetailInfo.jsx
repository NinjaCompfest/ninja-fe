import React from "react";

const ProgramDetailInfo = (props) => {
  return (
    <div className=" grid grid-cols-3 self-center p-10 max-h-full">
      <div className="col-span-3 text-center text-2xl font-bold">
        <p>{props.title}</p>
      </div>
      <div className="col-span-3 px-10 py-2">
        <p>by {props.fullname}</p>
      </div>
      <div className="col-span-3 p-5 px-10">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProgramDetailInfo;
