import './App.css'
import BalanceBox from './components/BalanceBox'
import FundrisingBox from './components/FundrisingBox'
import Navbar from './components/Navbar.js'
import ProfileBox from './components/ProfileBox'

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar />
      <FundrisingBox />
    </div>
  );
}

export default App
