import React from "react";

const TopUpAccountInfo = (props) => {
  return (
    <div>
      <p className="my-2">Fullname : {props.fullname}</p>
      <p className="my-2">Current balance : Rp {props.balance}</p>
    </div>
  );
};

export default TopUpAccountInfo;
