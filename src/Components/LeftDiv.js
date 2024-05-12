import React from "react";
import LeftDivContent from "./LeftDivContent";

function LeftDiv() {
  return (
    <div className="LeftDiv">
      <div className="headergreeting">
        <img className="economelogo1" src="/economelogo1.png" />
        <h1>Hello, user!</h1>
      </div>

      <div>
        <LeftDivContent />
      </div>
    </div>
  );
}

export default LeftDiv;
