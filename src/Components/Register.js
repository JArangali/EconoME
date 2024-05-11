import React from "react";
import LoginRegLeft from "./LoginRegLeft";
import RegRight from "./RegRight";

function Register() {
  return (
    <div className="homediv">
      <div className="regcontainer">
        <div className="row">
          <div className="col-md-6 loginleft">
            <LoginRegLeft />
          </div>
          <div className="col-md-6 loginright">
            <RegRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
