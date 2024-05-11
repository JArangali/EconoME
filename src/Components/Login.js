import React from "react";
import LoginRegLeft from "./LoginRegLeft";
import LoginRight from "./LoginRight";

function Login() {
  return (
    <div className="homediv">
      <div className="logincontainer">
        <div className="row">
          <div className="col-md-6 loginleft">
            <LoginRegLeft />
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
