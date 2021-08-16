import "./App.css";
import CrateProgram from "./CrateProgram";
import DonatePage from "./DonatePage";
import ProgramConfirmationDetail from "./ProgramConfirmationDetail";
import ProgramDetail from "./ProgramDetail";
import Withdraw from "./Withdraw";
import AdminDashboard from "./AdminDashboard";
import DonatorDashboard from './DonatorDashboard'
import FundriserDashboard from "./FundriserDashboard";
import TopUpPage from './TopUpPage'

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <AdminDashboard />
    </div>
  );
}

export default App;
