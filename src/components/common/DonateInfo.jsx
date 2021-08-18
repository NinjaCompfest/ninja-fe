import React from "react";

const DonateInfo = (props) => {
  return (
    <div>
      <p className="my-2">{props.title}</p>
      <p className="my-2">Current balance : Rp {props.balance}</p>
    </div>
  );
};

export default DonateInfo;
