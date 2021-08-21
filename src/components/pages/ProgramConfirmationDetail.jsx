import { Component } from "react";
import "../../styles/ProfileBox.css";
import Navbar from "../common//Navbar";
import ProgramConfirmationDetailInfo from "../common/ProgramConfirmationDetailInfo";
import { AuthContext } from "../../contexts/AuthContext";
import { getProgramById } from "../../services/user.service";

class ProgramConfirmationDetail extends Component {
  static contextType = AuthContext;

  state = {
    id: "",
    title: "",
    desc: "",
    fundraiser: "",
  };

  componentDidMount() {
    const token = this.context.userToken;
    getProgramById(token, this.props.match.params.id).then((res) => {
      this.setState({
        id: res.data._id,
        title: res.data.title,
        desc: res.data.description,
      });
    });
  }

  render() {
    return (
      <div className="bg-gray-300 min-h-screen">
        <Navbar />
        <ProgramConfirmationDetailInfo
          title={this.state.title}
          desc={this.state.desc}
          fullname={this.state.fullname}
          notificationId={this.props.location.search.substring(1)}
        />
      </div>
    );
  }
}

export default ProgramConfirmationDetail;
