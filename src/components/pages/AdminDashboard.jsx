import React, { Component } from "react";
import Navbar from "../common//Navbar.js";
import axios from "axios";
import FundrisingBox from "../common/FundrisingBox";
import AdminProfileBox from "../common/AdminProfileBox.js";
import "../../styles/ProfileBox.css";
import AdminWithdraw from "../common/AdminWithdraw.js";

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
    axios.get("http://localhost:3000/programs").then((result) => {
      this.setState({
        programs: result.data,
      });
    });

    axios.get("http://localhost:3000/fundrisers").then((result) => {
      this.setState({
        fundriser: result.data,
      });
    });

    axios.get("http://localhost:3000/withdraws").then((result) => {
      this.setState({
        withdraw: result.data,
      });
    });
  };

  rejectAccount = (data) => {
    axios.delete(`http://localhost:3000/fundrisers/${data}`).then(() => {
      this.getPostAPI();
    });
  };

  rejectWithdraw = (data) => {
    axios.delete(`http://localhost:3000/withdraws/${data}`).then(() => {
      this.getPostAPI();
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar status={this.state.status} link={this.state.link} />
        <div className="grid grid-cols-8 gap-4 self-center m-4 max-h-full">
          <div className="col-span-4">
            <p className="text-2xl my-1 mx-6 font-bold text-center">
              Program List
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-2xl my-1 mx-6 font-bold text-center">
              Account List
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-2xl my-1 mx-6 font-bold text-center">
              Withdraw List
            </p>
          </div>
          <div className="col-span-4">
            {this.state.programs.map((programs) => {
              return (
                <FundrisingBox
                  key={programs.id}
                  title={programs.title}
                  desc={programs.description}
                />
              );
            })}
          </div>
          <div className="col-span-2">
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
          <div className="col-span-2">
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
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
