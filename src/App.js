import "./App.css";
import BalanceBox from "./components/BalanceBox";
import Navbar from "./components/Navbar.js";
import Register from "./components/pages/Register";
import ProfileBox from "./components/ProfileBox";

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
