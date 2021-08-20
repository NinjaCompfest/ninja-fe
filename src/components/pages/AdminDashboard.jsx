import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarLogout from "../common//NavbarLogout";
import axios from "axios";
import FundrisingBox from "../common/FundrisingBox";
import AdminProfileBox from "../common/AdminProfileBox";
import "../../styles/ProfileBox.css";
import AdminWithdraw from "../common/AdminWithdraw";
import Panel from "../common/Panel"
import Tabs from "../common/Tabs"
import "../../styles/AdminDashboard.css"

class AdminDashboard extends Component {
  state = {
    programs: [],
    auth: [],
    fundriser: [],
    withdraw: [],
    link: "#",
    status: "Logout",
    balance: "props",
    username: "uname",
    fullname: "fname",
  };

  getPostAPI = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/programs`)
      .then((result) => {
        this.setState({
          programs: result.data,
        });
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/fundrisers`)
      .then((result) => {
        this.setState({
          fundriser: result.data,
        });
      });

    axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/withdraws`)
      .then((result) => {
        this.setState({
          withdraw: result.data,
        });
      });
  };

  rejectAccount = (data) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/fundrisers/${data}`)
      .then(() => {
        this.getPostAPI();
      });
  };

  rejectWithdraw = (data) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/withdraws/${data}`)
      .then(() => {
        this.getPostAPI();
      });
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <div className="bg-gray-300 min-h-screen main-container">
        <NavbarLogout status={this.state.status} link={this.state.link} />
        <div className="mt-5">
          <Tabs>
            <Panel title="Withdraw">
              <div className="text-2xl font-bold text-left m-5">Withdraw Verification</div>
              <div className="grid grid-cols-4 gap-4 self-center max-h-full">
                {this.state.withdraw.map((withdraw) => {
                  return (
                    <AdminWithdraw
                      key={withdraw.id}
                      data={withdraw}
                      remove={this.rejectWithdraw}
                    />
                  );
                })}
              </div>
            </Panel>
            <Panel title="Account">
              <div className="text-2xl font-bold text-left m-5">Account Verification</div>
              <div className="grid grid-cols-4 gap-4 self-center max-h-full">
                {this.state.fundriser.map((fundriser) => {
                  return (
                    <AdminProfileBox
                      key={fundriser.id}
                      data={fundriser}
                      remove={this.rejectAccount}
                    />
                  );
                })}
              </div>
            </Panel>
            <Panel title="Programs">
              <div className="text-2xl font-bold text-left m-5 mb-8">Programs Verification</div>
              {this.state.programs.map((programs) => {
                return (
                  <Link to={`/programs/confirmation/${programs.id}`}>
                    <FundrisingBox
                      key={programs.id}
                      title={programs.title}
                      desc={programs.description}
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
