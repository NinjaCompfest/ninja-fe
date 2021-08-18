import { Component } from "react";
import Navbar from "../common/Navbar";
import TopUpAccountInfo from "../common/TopUpAccountInfo";
import "../../styles/TopUpPage.css";
import "../../styles/ProfileBox.css";

class TopUpPage extends Component {
  state = {
    value: 0,
    post: [],
    link: "#",
    status: "Logout",
    fullname: "testing",
    balance: "00000",
  };

  ammountInput(event) {
    const inputValue = event.target.value;
    this.setState({ value: inputValue });
  }

  handelClick(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar status={this.state.status} link={this.state.link} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="container max-w-xl">
            <div className="grid grid-cols-3 gap-4 self-center p-10 max-h-full">
              <div className="col-span-3 text-center text-2xl font-bold">
                Top Up
              </div>
              <div className="col-span-3 p-5 px-10">
                <TopUpAccountInfo
                  fullname={this.state.fullname}
                  balance={this.state.balance}
                />
              </div>
              <div className="col-span-3 px-10">Top Up Amount</div>
              <div className="col-span-3 px-10">
                <input
                  className="min-w-full bg-gray-300 input-box px-10"
                  value={this.state.value}
                  onChange={(event) => {
                    this.ammountInput(event);
                  }}
                ></input>
              </div>
              <div className="col-span-3 grid grid-cols-3 gap-6 self-center px-10 text-center">
                <button
                  className="border border-black text-xl rounded-xl py-1 hover:bg-black hover:text-white transition duration-300"
                  onClick={() => {
                    this.handelClick(10000);
                  }}
                >
                  10000
                </button>
                <button
                  className="border border-black text-xl rounded-xl py-1 hover:bg-black hover:text-white transition duration-300"
                  onClick={() => {
                    this.handelClick(20000);
                  }}
                >
                  20000
                </button>
                <button
                  className="border border-black text-xl rounded-xl py-1 hover:bg-black hover:text-white transition duration-300"
                  onClick={() => {
                    this.handelClick(50000);
                  }}
                >
                  50000
                </button>
                <button
                  className="border border-black text-xl rounded-xl py-1 hover:bg-black hover:text-white transition duration-300"
                  onClick={() => {
                    this.handelClick(100000);
                  }}
                >
                  100000
                </button>
                <button
                  className="border border-black text-xl rounded-xl py-1 hover:bg-black hover:text-white transition duration-300"
                  onClick={() => {
                    this.handelClick(200000);
                  }}
                >
                  200000
                </button>
                <button
                  className="border border-black text-xl rounded-xl py-1 hover:bg-black hover:text-white transition duration-300"
                  onClick={() => {
                    this.handelClick(500000);
                  }}
                >
                  500000
                </button>
              </div>
              <div className="col-span-3 px-10 mt-10">
                <div className="grid grid-cols-2 gap-8 self-center max-h-full">
                  <a
                    href="#"
                    className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                  >
                    Cancel
                  </a>
                  <button className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopUpPage;
