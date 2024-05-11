import React from "react";
import LeftDivContent from "./LeftDivContent";
import Chart from "./Chart";

function LeftDiv() {
  return (
    <div className="LeftDiv">
      <div className="headergreeting">
        <img className="economelogo1" src="/economelogo1.png" />
        <h1>Hello, user!</h1>
      </div>

      <div>
        <LeftDivContent />
        <Chart />
      </div>
    </div>
  );
}

export default LeftDiv;
