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
    <tr>
      <td
        style={{
          backgroundColor:
            item.type === "Expense"
              ? isChecked
                ? "#C7FDB0"
                : "#FFC4C4"
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
                ? "#C7FDB0"
                : "#FFC4C4"
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
                ? "#C7FDB0"
                : "#FFC4C4"
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
                ? "#C7FDB0"
                : "#FFC4C4"
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
                ? "#C7FDB0"
                : "#FFC4C4"
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
                ? "#C7FDB0"
                : "#FFC4C4"
              : "#ffffff",
        }}
      >
        {item.type === "Expense" ? (
          <button className="button-row btn btn-warning" onClick={handleCheck}>
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
                ? "#C7FDB0"
                : "#FFC4C4"
              : "#ffffff",
        }}
      >
        <button className="button-row btn btn-danger" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;
