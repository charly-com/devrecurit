import { Route, Routes } from "react-router-dom";
import Register from './page/Register'
import Login from './page/Login'


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
