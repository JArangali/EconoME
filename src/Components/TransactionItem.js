import React, { useState } from "react";
import "../Luis.css";

function TransactionItem({ item, onDelete, onCheckedItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  function handleCheck() {
    setIsChecked(!isChecked);
    onCheckedItem(item.id);
  }

  function handleClick() {
    onDelete(item.id);
  }

  // Add a separate function to format the amount
  function formatAmount(amount: number): string {
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const toggleDelete = () => {
    setIsDelete(() => !isDelete);
  };

  return (
    <table style={{ position: "relative" }} className="tableData">
      {isDelete ? (
        <div
          className="deletesurediv"
          style={{ position: "absolute", inset: "0" }}
        >
          <button onClick={handleClick}>Yes</button>
          <button onClick={() => setIsDelete(() => !isDelete)}>No</button>
        </div>
      ) : null}
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
          ₱{formatAmount(item.amount)}
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
          <button className="button-row" onClick={toggleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </table>
  );
}

export default TransactionItem;
