import React from "react";

const FundrisingBox = (props) => {
  return (
    <div className="my-3 text-left">
      <div className="container max-w-full border max-h-32">
        <div className="m-5">
          <p className="text-2xl mx-2 font-serif">{props.title}</p>
          <p className="truncate mx-2 font-sans">
            A total of Rp {props.amount} has been collected
          </p>
        </div>
      </div>
    </div>
  );
};
export default FundrisingBox;
