import NavBar from "./components/NavBar/NavBar";
import BgContainer from "./BgContainer/BgContainer";
import HackFormers from "./pages/HackFormers";
import { Route, Routes } from "react-router-dom";
import Avalon from "./pages/Avalon";

function App() {
  return (
    <div className="App">
      <BgContainer></BgContainer>
      <Routes>
        <Route path="/" element={<Avalon />}></Route>
        <Route path="/hackformers" element={<HackFormers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
