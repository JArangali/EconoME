import React from "react";
import API from "../API/API.js";
import Chart from "./Chart";

function LeftDiv(totalExpense, totalIncome) {
  return (
    <div className="LeftDiv">
      <div className="headergreeting">
        <img className="economelogo1" src="/economelogo1.png" />
        <h1>Hello, user!</h1>
      </div>

      <div>
        <API />
        <Chart totalIncome={totalIncome} totalExpense={totalExpense} />
      </div>
    </div>
  );
}

export default LeftDiv;
