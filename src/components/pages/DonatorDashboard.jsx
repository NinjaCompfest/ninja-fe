import React, { Component } from "react";
import BalanceBox from "../common/BalanceBox";
import FundrisingBox from "../common/FundrisingBox";
import Navbar from "../common/Navbar";
import ProfileBox from "../common/ProfileBox";
import HistoryList from "../common/HistoryList";
import "../../styles/ProfileBox.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import {
  getPastDonation,
  getUserInfo,
  getVerifiedPrograms,
} from "../../services/user.service";

class DonatorDashboard extends Component {
  static contextType = AuthContext;

  state = {
    programs: [],
    history: [],
    balance: 0,
    username: "",
    fullname: "",
  };

  componentDidMount() {
    const token = this.context.userToken;
    getPastDonation(token).then((res) => {
      this.setState({
        history: res.data,
      });
    });
    getUserInfo(token).then((res) => {
      this.setState({
        username: res.data.username,
        fullname: res.data.full_name,
        balance: res.data.balance,
      });
    });
    getVerifiedPrograms(token).then((res) => {
      this.setState({
        programs: res.data,
      });
    });
  }
  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar status={this.state.status} link={this.state.link} />
        <div className="grid grid-cols-3 gap-4 self-center m-4 max-h-full">
          <div className="col-span-2">
            <BalanceBox balance={this.state.balance} />
          </div>
          <div className="">
            <div className="container max-w-full border h-36 items-center">
              <h1 className="text-center title-profile m-2">My Profile</h1>
              <ProfileBox
                username={this.state.username}
                fullname={this.state.fullname}
              />
            </div>
          </div>
          <div className="col-span-3 text-2xl font-bold">Program List</div>
          <div className="col-span-2">
            <div className="overflow-auto h-screen">
              {this.state.programs.map((programs) => {
                return (
                  <Link key={programs._id} to={`/programs/${programs._id}`}>
                    <FundrisingBox
                      key={programs._id}
                      title={programs.title}
                      amount={programs.collected_amount}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="">
            <div className="container max-w-full border">
              <h1 className="text-center title-profile m-2">
                Donation History
              </h1>
              <div className="overflow-auto h-80">
                {this.state.history.map((history, idx) => {
                  return (
                    <HistoryList
                      key={idx}
                      title={history.title}
                      amount={history.donated_amount}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DonatorDashboard;
