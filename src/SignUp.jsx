import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Landpage from "./components/Landpage";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [logginngIn, setLogginIn] = useState("true");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email", email);
    console.log("password", password);
    const response = await fetch("http://127.0.0.1:8000/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        withCredentials: true,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    });

    const loggedIn = await response.json();
    setToken(loggedIn.token);
    console.log(loggedIn);
    if (loggedIn.token) {
      return navigate("/");
    }
  };
  return (
    <>
      <div className="background background__login center"></div>

      <form
        action=""
        className="login center box-shadow"
        onSubmit={handleSubmit}
      >
        <div className="login__group">
          <input
            className="textbox textbox__username"
            id="username"
            type="text"
            placeholder="Email"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label" htmlFor="username">
            Email
          </label>
        </div>

        <div className="login__group">
          <input
            className="textbox textbox__password"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
        </div>
        <div className="login__group">
          <input
            className="textbox textbox__password"
            id="password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label className="label" htmlFor="confirmpassword">
            Confirm Password
          </label>
        </div>

        <div className="login__group">
          <input className="btn box-shadow" type="submit" value="SignUp" />
        </div>
      </form>
    </>
  );
};
export default SignUp;
