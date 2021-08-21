import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { putNotifications } from "../../services/user.service";

const ProgramConfirmationDetailInfo = (props) => {
  const { userToken, userId } = useContext(AuthContext);
  const history = useHistory();

  const handleReject = () => {
    putNotifications(
      userToken,
      userId,
      props.notificationId,
      "PROGRAM",
      false
    ).then(() => {
      history.push("/");
    });
  };

  const handleAccept = () => {
    console.log(props);
    putNotifications(
      userToken,
      userId,
      props.notificationId,
      "PROGRAM",
      true
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container max-w-xl">
          <div className=" grid grid-cols-3 gap-4 self-center p-10 max-h-full">
            <div className="col-span-3 text-center text-2xl font-bold">
              <p>{props.title}</p>
            </div>
            <div className="col-span-3 p-5 px-10">
              <p>{props.desc}</p>
            </div>
            <div className="col-span-3 px-10 mt-2">
              <div className="grid grid-cols-2 gap-8 self-center max-h-full">
                <button
                  className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                  onClick={handleReject}
                >
                  Reject
                </button>
                <button
                  className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                  onClick={handleAccept}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramConfirmationDetailInfo;
