import React from "react";
import RegLeft from "./RegLeft";
import RegRight from "./RegRight";

function Register() {
  return (
    <div className="homediv">
      <div className="regcontainer">
        <div className="row">
          <div className="col-md-6 loginleft">
            <RegLeft />
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
