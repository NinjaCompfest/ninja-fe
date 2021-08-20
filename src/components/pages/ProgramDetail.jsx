import { Component } from "react";
import axios from "axios";
import "../../styles/ProfileBox.css";
import ProgramDetailInfo from "../common/ProgramDetailInfo";
import NavbarLogout from "../common//NavbarLogout";
import { Link } from "react-router-dom";


class ProgramDetail extends Component {
  state = {
    value: 0,
    post: [],
    link: "#",
    status: "Logout",
    fullname: "fullname",
    balance: "00000",
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
          fullname: result.data.amountGathered,
        });
      });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <NavbarLogout status={this.state.status} link={this.state.link} />
        <div>
          <div className="flex items-center justify-center min-h-screen">
            <div className="container max-w-xl">
              <ProgramDetailInfo
                  title={this.state.title}
                  desc={this.state.desc}
                  fullname={this.state.fullname}
                />
              <div className=" grid grid-cols-3 gap-4 self-center px-10 max-h-full">  
                <div className="col-span-3 px-10 mb-10">
                  <div className="grid grid-cols-2 gap-8 self-center max-h-full">
                  <Link to={`/donator/dashboard`} className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300">
                      Exit
                    </Link>
                    <Link to={`/programs/${this.state.id}/donate`} className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300">
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

