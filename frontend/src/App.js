import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Studentpage from "./pages/Studentpage";
import Subpage from "./pages/Subpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/s" element={<Homepage />}></Route>
        <Route path="/workshops" element={<Subpage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route path="/" element={<Studentpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
