import { Component } from "react";
import Navbar from "../common/Navbar";
import "../../styles/TopUpPage.css";
import "../../styles/ProfileBox.css";
import WithdrawInfo from "../common/WithdrawInfo";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { getProgramById, withdraw } from "../../services/user.service";

class Withdraw extends Component {
  static contextType = AuthContext;

  state = {
    id: "",
    title: "",
    value: 0,
    amount: 0,
  };

  getPostAPI = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/programs/${this.props.match.params.id}`
      )
      .then((result) => {
        this.setState({
          id: result.data.id,
          title: result.data.title,
          desc: result.data.description,
          donateGathered: result.data.amountGathered,
        });
      });
  };

  ammountInput(event) {
    const inputValue = event.target.value;
    this.setState({ value: inputValue });
  }

  handelClick(newValue) {
    this.setState({ value: newValue });
  }

  handleSubmit = () => {
    const token = this.context.userToken;
    const userId = this.context.userId;
    withdraw(token, this.state.id, this.state.value, userId).then(() => {
      this.props.history.push("/");
    });
  };

  componentDidMount() {
    const token = this.context.userToken;
    const id = this.props.match.params.id;
    getProgramById(token, id).then((res) => {
      console.log(res);
      this.setState({
        id: res.data._id,
        title: res.data.title,
        amount: res.data.collected_amount,
      });
    });
  }

  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="container max-w-xl">
            <div className="grid grid-cols-3 gap-4 self-center p-10 max-h-full">
              <div className="col-span-3 text-center text-2xl font-bold">
                Withdraw
              </div>
              <div className="col-span-3 p-5 px-10">
                <WithdrawInfo
                  title={this.state.title}
                  donateGathered={this.state.amount}
                />
              </div>
              <div className="col-span-3 px-10">Withdraw Amount</div>
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
                  <Link
                    to={`/fundriser/dashboard`}
                    className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                  >
                    Cancel
                  </Link>
                  <button
                    className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                    onClick={this.handleSubmit}
                  >
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

export default Withdraw;
