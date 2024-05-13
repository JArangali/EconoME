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
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          {item.date}
        </td>
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          {item.type}
        </td>
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          {item.purpose}
        </td>
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          {item.amount}
        </td>
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          {item.reason}
        </td>
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          {item.type === "Expense" ? (
            <button className="button-row" onClick={handleCheck}>
              {isChecked ? "Paid" : "Unpaid"}
            </button>
          ) : (
            "Earnings"
          )}
        </td>
        <td
          style={{
            backgroundColor:
              item.type === "Expense"
                ? isChecked
                  ? "#99ff54"
                  : "#ff6e54"
                : "#ffffff",
          }}
        >
          <button className="button-row" onClick={handleClick}>
            Delete
          </button>
        </td>
      </tr>
    </table>
  );
}

export default TransactionItem;
