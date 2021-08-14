import "./App.css";
import BalanceBox from "./components/common/BalanceBox";
import Navbar from "./components/common/Navbar";
import Register from "./components/pages/Register";
import ProfileBox from "./components/common/ProfileBox";

function App() {
  return (
    <div className="App bg-gray-900">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
