import "./App.css";
import NgoTheme from "./NgoTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ngo" element={<NgoTheme/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
