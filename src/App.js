import "./App.css";
import NgoTheme from "./NgoTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import LandPage from "./components/Landpage";
import Form from "./components/Form";
import YourSite from "./YourSite";
import Dashboard from "./Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ngo/:name" element={<NgoTheme />} />
        <Route path="/yoursite" element={<YourSite />} />
        <Route path="/yoursite" element={<YourSite />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
