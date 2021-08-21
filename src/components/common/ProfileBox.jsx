import React from "react";
import "../../styles/ProfileBox.css";

const ProfileBox = (props) => {
  return (
    <div>
      <div className="profile justify-between flex mx-5">
        <div className="profile-info">
          <p className="">Username : {props.username}</p>
          <p className="my-3">Fullname : {props.fullname}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
