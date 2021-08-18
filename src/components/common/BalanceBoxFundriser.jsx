import React from "react";
import "../../styles/BalanceBox.css";

const BalanceBoxFundriser = (props) => {
  return (
    <div className="container max-w-full flex justify-between h-36">
      <div className="balanceContain py-5 self-center">
        <p className="text-3xl px-5">Balance</p>
        <p className="text-3xl px-5 py-2">{props.balance}</p>
      </div>
    </div>
  );
};

export default BalanceBoxFundriser;
