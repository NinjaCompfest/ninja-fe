import React from "react";
import "../../styles/ProfileBox.css";

const ProfileBox = () => {
  return (
    <div className="container max-w-full border border-black">
      <h1 className="text-center title-profile m-2">My Profile</h1>
      <div className="profile justify-between flex mx-5">
        <div className="profile-info">
          <p className="">Username :</p>
          <p className="my-6">Fullname :</p>
        </div>
        <div className="profile-content">
          <p>[Username]</p>
          <p className="my-6">[Fullname]</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
