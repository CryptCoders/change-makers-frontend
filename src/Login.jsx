import { useState } from "react";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logginngIn, setLogginIn] = useState("true");
  const [token, setToken] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/v1/signin", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        withCredentials: true,
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const loggedIn = await response.json();
    setToken(loggedIn.token);
    console.log(loggedIn);
  };
  const LogOut = async (e) => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/signout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${token}`,
        withCredentials: true,
      },
    });
    const logoutresponse = await response.json();
    setToken(null);
    console.log(logoutresponse);
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
            Username
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
          <input className="btn box-shadow" type="submit" value="Login" />
        </div>
      </form>
    </>
  );
};
export default Login;
