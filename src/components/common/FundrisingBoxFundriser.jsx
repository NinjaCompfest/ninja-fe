import React from "react";

const FundrisingBoxFundriser = (props) => {
  return (
    <div className="my-4">
      <div className="container max-w-full border max-h-32">
        <div className="flex justify-between">
          <div className="m-5 truncate">
            <p className="text-2xl mx-2 font-serif">{props.title}</p>
            <p className="truncate mx-2 font-sans">{props.desc}</p>
          </div>
          <div className="items-center self-center"></div>
        </div>
      </div>
    </div>
  );
};

export default FundrisingBoxFundriser;
