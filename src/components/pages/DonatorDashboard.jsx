import React, { Component } from "react";
import BalanceBox from "../common/BalanceBox";
import FundrisingBox from "../common/FundrisingBox";
import NavbarLogout from "../common//NavbarLogout";
import ProfileBox from "../common/ProfileBox";
import axios from "axios";
import HistoryList from "../common/HistoryList";
import "../../styles/ProfileBox.css";
import { Link } from "react-router-dom";

class DonatorDashboard extends Component {
  state = {
    post: [],
    user: [],
    programs: [],
    history: [],
    link: "#",
    status: "Logout",
    balance: "props",
    username: "uname",
    fullname: "fname",
  };

  // jangan lupa buat API histori, ini pake satu aja.
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/programs`).then((result) => {
      this.setState({
        programs: result.data,
      });
    });

    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/history`).then((result) => {
      this.setState({
        history: result.data,
      });
    });

    axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/users/2`).then((result) => {
      this.setState({
        user: result.data,
      });
    });
  }
  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <NavbarLogout status={this.state.status} link={this.state.link} />
        <div className="grid grid-cols-3 gap-4 self-center m-4 max-h-full">
          <div className="col-span-2">
            <BalanceBox balance={this.state.user.balance} />
          </div>
          <div className="">
            <div className="container max-w-full border h-36 items-center">
              <h1 className="text-center title-profile m-2">My Profile</h1>
              <ProfileBox
                username={this.state.user.username}
                fullname={this.state.user.full_name}
              />
            </div>
          </div>
          <div className="col-span-3 text-2xl font-bold">Program List</div>
          <div className="col-span-2">
            <div className="overflow-auto h-screen">
              {this.state.programs.map((programs) => {
                return (
                  <Link to={`/programs/${programs.id}`}>
                  <FundrisingBox
                    key={programs.id}
                    title={programs.title}
                    desc={programs.description}
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
                {this.state.history.map((history) => {
                  return (
                    <HistoryList
                      key={history.id}
                      history={history.title}
                      ammount={history.id}
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
