import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import users from "../userDB";

const Login = () => {
  const [islogged, setIslogged] = useState(false);
  const [loginParams, setLoginParams] = useState({
    user_id: "",
    user_password: ""
  });
  const navigate = useNavigate();
  const handleFormChange = (event) => {
    const loginParamsNew = { ...loginParams };
    const val = event.target.value;
    loginParamsNew[event.target.name] = val;
    setLoginParams(loginParamsNew);
  };

  const login = (event) => {
    const user_id = loginParams.user_id;
    const user_password = loginParams.user_password;
    for (let user of users) {
      if (user.username === user_id && user.password === user_password) {
        localStorage.setItem("token", "T");
        localStorage.setItem("user", JSON.stringify(user)); // set the user data
        setIslogged(true);
        return;
      }
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (islogged) {
      navigate("/");
    }
  }, [islogged, navigate]);

  if (localStorage.getItem("token")) {
    return navigate("/");
  }

  // const date = new Date();
  // const hour = date.getHours();

  return (
    <div className="login-page">
      <div className="container">
        <div className="header">
          <img src="https://i.imgur.com/IWu3qzz.png" alt="" />
        </div>
        <div className="login-content">
          <form onSubmit={login}>
            <div className="form-group">
              <label className="control-label" style={{ color: "#000000", fontWeight: "bold" }}>
                USERNAME
              </label>
              <input
                type="text"
                name="user_id"
                onChange={handleFormChange}
                className="form-control"
                // placeholder="User ID"
                autofocus=""
              />
              <input type="hidden" name="code" value="" className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label" style={{ color: "#000000", fontWeight: "bold" }}>
                PASSWORD
              </label>
              <input
                type="password"
                name="user_password"
                onChange={handleFormChange}
                className="form-control"
                // placeholder="Password"
              />
            </div>
            <div className="save_username_container">
              <label className="save_username">
                Remember Me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="button_box">
                <input type="submit" className="btn btn-inverse" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
