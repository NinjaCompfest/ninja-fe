import { Component } from "react";
import axios from "axios";
import "../../styles/ProfileBox.css";
import ProgramDetailInfo from "../common/ProgramDetailInfo";
import Navbar from "../common//Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { getProgramById } from "../../services/user.service";

class ProgramDetail extends Component {
  static contextType = AuthContext;

  state = {
    id: "",
    title: "",
    desc: "",
    amountGathered: "",
  };

  componentDidMount() {
    const token = this.context.userToken;
    getProgramById(token, this.props.match.params.id).then((res) => {
      this.setState({
        id: res.data.id,
        title: res.data.title,
        desc: res.data.description,
        amountGathered: res.data.collected_amount,
      });
    });
  }

  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar />
        <div>
          <div className="flex items-center justify-center min-h-screen">
            <div className="container max-w-xl">
              <ProgramDetailInfo
                title={this.state.title}
                desc={this.state.desc}
                amountGathered={this.state.amountGathered}
              />
              <div className=" grid grid-cols-3 gap-4 self-center px-10 max-h-full">
                <div className="col-span-3 px-10 mb-10">
                  <div className="grid grid-cols-2 gap-8 self-center max-h-full">
                    <Link
                      to={`/donator/dashboard`}
                      className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                    >
                      Exit
                    </Link>
                    <Link
                      to={`/programs/${this.state.id}/donate`}
                      className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgramDetail;
