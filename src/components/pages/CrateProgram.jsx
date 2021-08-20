import { Component } from "react";
import NavbarLogout from "../common//NavbarLogout";
import "../../styles/TopUpPage.css";
import "../../styles/ProfileBox.css";
import { Link } from "react-router-dom";

class CrateProgram extends Component {
  state = {
    valueTitle: "",
    valueDescription: "",
    status: "Logout",
  };

  titleInput(event) {
    const inputValue = event.target.value;
    this.setState({ valueTitle: inputValue });
  }

  descriptionInput(event) {
    const inputValue = event.target.value;
    this.setState({ valueDescription: inputValue });
  }

  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <NavbarLogout status={this.state.status} link={this.state.link} />
        <div className="flex items-center justify-center min-h-screen">
          <div className="container max-w-xl">
            <div className="grid grid-cols-3 gap-4 self-center p-10 max-h-full">
              <div className="col-span-3 text-center text-2xl font-bold">
                Crate Donation Program
              </div>
              <div className="col-span-3 px-10 mt-5">Program Name</div>
              <div className="col-span-3 px-10">
                <input
                  className="min-w-full bg-gray-300 input-box px-10"
                  value={this.state.valueTitle}
                  onChange={(event) => {
                    this.titleInput(event);
                  }}
                ></input>
              </div>
              <div className="col-span-3 px-10">Program Description</div>
              <div className="col-span-3 px-10">
                <textarea
                  className="min-w-full bg-gray-300 textarea-box px-10 overflow-auto"
                  value={this.state.valueDescription}
                  onChange={(event) => {
                    this.descriptionInput(event);
                  }}
                ></textarea>
              </div>
              <div className="col-span-3 px-10 mt-5">
                <div className="grid grid-cols-2 gap-8 self-center max-h-full">
                  <Link to={`/fundriser/dashboard`} className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300">
                  Cancel
                  </Link>
                  <button className="border border-black text-xl rounded-xl py-1 text-center bg-black text-white hover:bg-white hover:text-black transition duration-300">
                    Make New
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

export default CrateProgram;
