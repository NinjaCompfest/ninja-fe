import React from "react";

const HistoryList = (props) => {
  return (
    <div>
      <div className="profile justify-between flex">
        <div className="m-4">
          <p>{props.title}</p>
        </div>
        <div className="m-4">
          <p>{props.amount}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
