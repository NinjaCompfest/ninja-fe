import React, { Component } from "react";
import axios from "axios";
import Navbar from "../common//Navbar";
import ProfileBox from "../common/ProfileBox";
import BalanceBoxFundriser from "../common/BalanceBoxFundriser";
import FundrisingBoxFundriser from "../common/FundrisingBoxFundriser";
import "../../styles/ProfileBox.css";
import { Link } from "react-router-dom";
import { getUserInfo, getVerifiedPrograms } from "../../services/user.service";

class FundriserDashboard extends Component {
  state = {
    programs: [],
    balance: 0,
    username: "",
    fullname: "",
  };

  componentDidMount() {
    const token = this.context.userToken;
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
        <Navbar />
        <div className="grid grid-cols-3 gap-4 self-center m-4 max-h-full">
          <div className="col-span-2">
            <BalanceBoxFundriser balance={this.state.balance} />
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
          <div className="col-span-3 flex justify-between">
            <p className="text-2xl mx-5 font-bold">Program List</p>
            <Link
              to={"/new"}
              className="topup-btn mx-5 px-6 py-1 rounded bg-black text-white border border-black hover:bg-white hover:text-black transition duration-300"
            >
              Make New
            </Link>
          </div>
          <div className="col-span-3">
            {this.state.programs.map((programs) => {
              return (
                <Link
                  key={programs._id}
                  to={`/programs/withdraw/${programs.id}`}
                >
                  <FundrisingBoxFundriser
                    key={programs._id}
                    title={programs.title}
                    desc={programs.description}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FundriserDashboard;
