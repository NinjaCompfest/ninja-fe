import React, { Component } from "react";
import Navbar from "../common//Navbar";
import axios from "axios";
import FundrisingBox from "../common/FundrisingBox";
import AdminProfileBox from "../common/AdminProfileBox";
import "../../styles/ProfileBox.css";
import AdminWithdraw from "../common/AdminWithdraw";

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
