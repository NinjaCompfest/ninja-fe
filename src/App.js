import AdminDashboard from './AdminDashboard';
import './App.css'
import AdminProfileBox from './components/AdminProfileBox';
import DonatePage from './DonatePage';
import DonatorDashboard from './DonatorDashboard.jsx'
import FundriserDashboard from './FundriserDashboard.jsx';
import TopUpPage from './TopUpPage.jsx';


function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <DonatePage />
    </div>
  );
}

export default App
