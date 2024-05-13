import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";


function Login() {
  return (
    <div className="homediv-login">
      <div className="logincontainer">
        <div className="row">
          <div className="col-md-6 loginleft">
            <LoginLeft />
          </div>
          <div className="col-md-6 loginright">
            <LoginRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
