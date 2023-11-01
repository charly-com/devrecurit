import { Route, Routes } from "react-router-dom";
import Register from './page/Register';
import Login from './page/Login';
import Verify from "./page/Verify";
import Sucess from "./page/Sucess";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/success" element={<Sucess />} />
      </Routes>
    </div>
  );
}

export default App;
