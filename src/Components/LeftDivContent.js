import React from "react";

function LeftDivContent() {
  return (
    <div className="LeftDivContent">
      <div className="Income">
        <table className="table">
          <tr>
            <td>
              <h4>Income</h4>
            </td>
            <td>
              <h4>10,000</h4>
            </td>
            <td>
              <button>Add</button>
            </td>
          </tr>
        </table>
      </div>

      <div className="Expense">
        <table className="table">
          <tr>
            <td>
              <h4>Expense</h4>
            </td>
            <td>
              <h4>10,000</h4>
            </td>
            <td>
              <button>Add</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default LeftDivContent;
