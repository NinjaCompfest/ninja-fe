import { Component } from "react";
import "../../styles/ProfileBox.css";
import NavbarLogout from "../common//NavbarLogout";
import ProgramConfirmationDetailInfo from "../common/ProgramConfirmationDetailInfo";
import axios from "axios";


class ProgramConfirmationDetail extends Component {
  state = {
    value: 0,
    post: [],
    link: "#",
    status: "Logout",
    fullname: "fullname",
    balance: "00000",
    title: "Butuh Bantuan! Bayi Ojek Online Berjuang di NICU!",
    desc: "Umur bayi pak Johani dan bu Umroh baru 40 hari, namun infeksi darah dan pendarahan lambung membuat wajahnya membiru saat lahir sampai kini masih berjuang di NICU. Belum selesai di situ, perjuangan hidup si kecil semakin berat karena didiagnosa down syndrome.. Tanpa perawatan dokter, napas si kecil akan terhenti, nahasnya biaya Rp 300jt tak sebanding dengan penghasilan menarik ojol sang ayah yang hanya Rp 50rb/hari..",
  };

  getPostAPI = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/programs/${this.props.match.params.id}`
      )
      .then((result) => {
        this.setState({
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
        <ProgramConfirmationDetailInfo
          title={this.state.title}
          desc={this.state.desc}
          fullname={this.state.fullname}
        />
      </div>
    );
  }
}

export default ProgramConfirmationDetail;
