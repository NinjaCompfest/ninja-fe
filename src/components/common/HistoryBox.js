import React from "react";

const HistoryBox = (props) => {
  return (
    <div className="container max-w-full border">
      <h1 className="text-center title-profile m-2">Donation History</h1>
      <div className="overflow-auto h-80">
        <div className="profile justify-between flex">
          <div className="m-4">
            <p>{props.history}</p>
          </div>
          <div className="m-4">
            <p>{props.ammount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryBox;
