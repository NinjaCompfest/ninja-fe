import React from "react";

const FundrisingBoxVerification = (props) => {
  return (
    <div className="my-3 text-left">
      <div className="container max-w-full border max-h-32">
        <div className="m-5">
          <p className="text-2xl mx-2 font-serif">{props.title}</p>
          <p className="truncate mx-2 font-sans">{props.name}</p>
        </div>
      </div>
    </div>
  );
};
export default FundrisingBoxVerification;
