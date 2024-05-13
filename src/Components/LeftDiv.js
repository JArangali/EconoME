import React from "react";
import Chart from "./Chart";

function LeftDiv(totalExpense, totalIncome) {
  return (
    <div className="LeftDiv">
      <div className="headergreeting">
        <img className="economelogo1" src="/economelogo1.png" />
        <h1>Hello, user!</h1>
      </div>

      <div>
        <Chart totalIncome={totalIncome} totalExpense={totalExpense} />
      </div>
    </div>
  );
}

export default LeftDiv;
