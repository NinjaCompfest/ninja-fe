import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { putNotifications } from "../../services/user.service";

const AdminProfileBox = (props) => {
  const { userToken, userId } = useContext(AuthContext);
  const history = useHistory();

  const handleReject = () => {
    putNotifications(
      userToken,
      userId,
      props.notificationId,
      props.type,
      false
    ).then(() => {
      history.push("/");
    });
  };

  const handleAccept = () => {
    putNotifications(
      userToken,
      userId,
      props.notificationId,
      props.type,
      true
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="my-3">
      <div className="container max-w-full border h-36 items-center">
        <div className="profile justify-between flex mx-5">
          <div className="profile-info">
            <p className="my-3">Username : {props.data.username}</p>
            <p className="">Fullname : {props.data.full_name}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className=" text-4xl my-3" onClick={handleAccept}>
            <FaCheckCircle />
          </button>
          <button className="mx-5 text-4xl my-3 remove" onClick={handleReject}>
            <FaTimesCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileBox;
