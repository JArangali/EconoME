import React, { useState } from "react";
import "../Luis.css";

function TransactionItem({ item, onDelete, onCheckedItem }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
    onCheckedItem(item.id);
  }

  function handleClick() {
    onDelete(item.id);
  }

  return (
    <table className="tableData">
      <tr>
        <td style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {item.date}
        </td>
        <td style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {item.type}
        </td>
        <td style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {item.purpose}
        </td>
        <td style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {item.amount}
        </td>
        <td>
          <button className="button-row" onClick={handleCheck}>
            {isChecked ? "Paid" : "Unpaid"}
          </button>
        </td>
        <td>
          <button className="button-row" onClick={handleClick}>
            Delete
          </button>
        </td>
      </tr>
    </table>
  );
}

export default TransactionItem;
