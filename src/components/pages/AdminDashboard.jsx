import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common//Navbar";
import AdminProfileBox from "../common/AdminProfileBox";
import "../../styles/ProfileBox.css";
import AdminWithdraw from "../common/AdminWithdraw";
import Panel from "../common/Panel";
import Tabs from "../common/Tabs";
import "../../styles/AdminDashboard.css";
import { AuthContext } from "../../contexts/AuthContext";
import { getNotifications } from "../../services/user.service";
import FundrisingBoxVerification from "../common/FundrisingBoxVerification";

class AdminDashboard extends Component {
  static contextType = AuthContext;

  state = {
    program: [],
    fundraise: [],
    withdrawal: [],
  };

  componentDidMount() {
    const token = this.context.userToken;
    const userId = this.context.userId;
    getNotifications(token, userId).then((res) => {
      const fundraise = res.data.filter((data) => data.type === "FUNDRAISE");
      const withdrawal = res.data.filter((data) => data.type === "WITHDRAWAL");
      const program = res.data.filter((data) => data.type === "PROGRAM");
      this.setState({
        fundraise,
        program,
        withdrawal,
      });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="bg-gray-300 min-h-screen main-container">
        <Navbar />
        <div className="mt-5">
          <Tabs>
            <Panel title="Withdraw">
              <div className="text-2xl font-bold text-left m-5">
                Withdraw Verification
              </div>
              <div className="grid grid-cols-4 gap-4 self-center max-h-full">
                {this.state.withdrawal &&
                  this.state.withdrawal.map((withdrawal) => {
                    return (
                      <AdminWithdraw
                        key={withdrawal._id}
                        data={withdrawal}
                        notificationId={withdrawal._id}
                        type={`WITHDRAWAL`}
                      />
                    );
                  })}
              </div>
            </Panel>
            <Panel title="Account">
              <div className="text-2xl font-bold text-left m-5">
                Account Verification
              </div>
              <div className="grid grid-cols-4 gap-4 self-center max-h-full">
                {this.state.fundraise &&
                  this.state.fundraise.map((fundraise) => {
                    return (
                      <AdminProfileBox
                        key={fundraise._id}
                        data={fundraise}
                        notificationId={fundraise._id}
                        type={`FUNDRAISE`}
                      />
                    );
                  })}
              </div>
            </Panel>
            <Panel title="Programs">
              <div className="text-2xl font-bold text-left m-5 mb-8">
                Programs Verification
              </div>
              {this.state.program &&
                this.state.program.map((program) => {
                  return (
                    <Link
                      to={`/programs/confirmation/${program.program_id}?${program._id}`}
                    >
                      <FundrisingBoxVerification
                        key={program._id}
                        title={program.program_name}
                        name={program.fundraiser_name}
                        type={`PROGRAMS`}
                      />
                    </Link>
                  );
                })}
            </Panel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
