import React, { useState, useEffect } from "react";
import TransactionItemList from "./TransactionItemList";
import LeftDivContent from "./LeftDivContent"; // import LeftDivContent
import API from "../API/API.js";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../Luis.css";

function RightDivContent() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      date: "2024-11-14",
      type: "Expense",
      purpose: "Household",
      amount: 2000,
      reason: "Water",
      isChecked: false,
    },
    {
      id: 2,
      date: "2024-09-17",
      type: "Income",
      purpose: "Saving",
      amount: 20000,
      reason: "SSS",
      isChecked: false,
    },
    {
      id: 3,
      date: "2024-12-08",
      type: "Expense",
      purpose: "Education",
      amount: 1500,
      reason: "Tuition",
      isChecked: false,
    },
    {
      id: 4,
      date: "2024-11-14",
      type: "Expense",
      purpose: "Other",
      amount: 2000,
      reason: "Gift",
      isChecked: false,
    },
    {
      id: 5,
      date: "2024-09-17",
      type: "Income",
      purpose: "Transportation",
      amount: 20000,
      reason: "SSS",
      isChecked: false,
    },
    {
      id: 6,
      date: "2024-12-08",
      type: "Expense",
      purpose: "Education",
      amount: 1500,
      reason: "Tuition",
      isChecked: false,
    },
  ]);

  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let expense = 0;
    let income = 0; // Start with the total income

    items.forEach((item) => {
      if (item.type === "Expense" && item.isChecked === false) {
        expense += item.amount;
      } else if (item.type === "Income") {
        income += item.amount;
      }
      if (item.type === "Expense" && item.isChecked === true) {
        income -= item.amount; // Subtract the expense amount from the income
      }
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [items, totalIncome]);

  const handleAddItem = (newItem) => {
    setItems((items) => {
      const newItems = [...items, newItem];
      let expense = 0;
      let income = 0;

      newItems.forEach((item) => {
        if (item.type === "Expense") {
          expense += item.amount;
        } else if (item.type === "Income") {
          income += item.amount;
        }
      });

      // Calculate new totals based on newItems array
      const newTotalExpense = expense + newItem.amount;
      const newTotalIncome = income + newItem.amount;

      // Update totalExpense and totalIncome state variables
      setTotalExpense(newTotalExpense);
      setTotalIncome(newTotalIncome);

      // Return updated items
      return newItems;
    });
  };

  function handleLogout() {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      setItems([]);
      navigate("/", { replace: true }); // replace "login" with your actual login route
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => {
      const newItems = items.filter((item) => item.id !== id);
      let expense = 0;
      let income = 0;

      newItems.forEach((item) => {
        if (item.type === "Expense") {
          expense += item.amount;
        } else if (item.type === "Income") {
          income += item.amount;
        }
      });

      // Update totalExpense and totalIncome state variables
      setTotalExpense(expense);
      setTotalIncome(income);

      return newItems;
    });
  }

  const [sortBy, setSortBy] = useState("input");

  const toDate = (dateString) => {
    const [month, day, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const [householdAmount, setHouseholdAmount] = useState(0);
  const [transportationAmount, setTransportationAmount] = useState(0);
  const [personalAmount, setPersonalAmount] = useState(0);
  const [educationAmount, setEducationAmount] = useState(0);
  const [othersAmount, setOthersAmount] = useState(0);

  useEffect(() => {
    let householdAmount = 0;
    let transportationAmount = 0;
    let personalAmount = 0;
    let educationAmount = 0;
    let othersAmount = 0;

    items.forEach((item) => {
      if (
        item.purpose === "Household" &&
        item.isChecked === false &&
        item.type === "Expense"
      ) {
        householdAmount += item.amount;
      } else if (
        item.purpose === "Transportation" &&
        item.isChecked === false &&
        item.type === "Expense"
      ) {
        transportationAmount += item.amount;
      } else if (
        item.purpose === "Personal" &&
        item.isChecked === false &&
        item.type === "Expense"
      ) {
        personalAmount += item.amount;
      } else if (
        item.purpose === "Education" &&
        item.isChecked === false &&
        item.type === "Expense"
      ) {
        educationAmount += item.amount;
      } else if (
        item.purpose === "Other" &&
        item.isChecked === false &&
        item.type === "Expense"
      ) {
        othersAmount += item.amount;
      }
    });
    setHouseholdAmount(householdAmount);
    setTransportationAmount(transportationAmount);
    setPersonalAmount(personalAmount);
    setEducationAmount(educationAmount);
    setOthersAmount(othersAmount);
  }, [items]);

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "type")
    sortedItems = items.slice().sort((a, b) => a.type.localeCompare(b.type));
  if (sortBy === "purpose")
    sortedItems = items
      .slice()
      .sort((a, b) => a.purpose.localeCompare(b.purpose));
  if (sortBy === "amount-asc")
    sortedItems = items.slice().sort((a, b) => a.amount - b.amount);
  if (sortBy === "amount-desc")
    sortedItems = items.slice().sort((a, b) => b.amount - a.amount);
  if (sortBy === "checked")
    sortedItems = items.slice().sort((a, b) => {
      if (a.isChecked === b.isChecked) {
        return a.type.localeCompare(b.type);
      } else {
        return Number(a.isChecked) - Number(b.isChecked);
      }
    });
  if (sortBy === "unchecked")
    sortedItems = items.slice().sort((a, b) => {
      if (a.isChecked === b.isChecked) {
        return a.type.localeCompare(b.type);
      } else {
        return Number(b.isChecked) - Number(a.isChecked);
      }
    });
  if (sortBy === "date")
    sortedItems = items.slice().sort((a, b) => toDate(a.date) - toDate(b.date));

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  }

  const isMobile = useMediaQuery("(max-width:600px)"); // adjust the breakpoint as needed

  return (
    <div className="Home">
      <div className="logout-div">
        <button className="btn btn btn-dark" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="HomeContent">
        <div>
          <div className="Chart_Content">
            <center>
              <LeftDivContent
                onAddItem={handleAddItem}
                totalIncome={totalIncome}
                totalExpense={totalExpense}
              />{" "}
            </center>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Typography
                component="pre"
                sx={{
                  maxWidth: { xs: "100%", md: "50%", flexShrink: 1 },
                  overflow: "auto",
                }}
              ></Typography>

              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: "household",
                        value: householdAmount,
                        label: `Household (${(
                          (householdAmount / totalExpense) *
                          100
                        ).toFixed(2)}%)`,
                        color: "#D25FA8",
                      },
                      {
                        id: "transportation",
                        value: transportationAmount,
                        label: `Transportation (${(
                          (transportationAmount / totalExpense) *
                          100
                        ).toFixed(2)}%)`,
                        color: "#A1CFF0",
                      },
                      {
                        id: "personal",
                        value: personalAmount,
                        label: `Personal (${(
                          (personalAmount / totalExpense) *
                          100
                        ).toFixed(2)}%)`,
                        color: "#ECC00C",
                      },
                      {
                        id: "education",
                        value: educationAmount,
                        label: `Education (${(
                          (educationAmount / totalExpense) *
                          100
                        ).toFixed(2)}%)`,
                        color: "#9347A9",
                      },
                      {
                        id: "others",
                        value: othersAmount,
                        label: `Others (${(
                          (othersAmount / totalExpense) *
                          100
                        ).toFixed(2)}%)`,
                        color: "#fffff",
                      },
                    ],
                  },
                ]}
                width={isMobile ? 300 : 500} // adjust the width based on the viewport size
                height={isMobile ? 200 : 300} // adjust the height based on the viewport size
                margin={{ right: isMobile ? 100 : 220 }} // adjust the margin based on the viewport size
              />
            </Stack>

            <API />
          </div>
        </div>
        <div className="RightDivContent">
          {/* pass handleAddItem as a prop */}
          <div className="Transactions">
            <table className="transtable">
              <tr>
                <td className="flex-container">
                  <h4>Transactions </h4>
                  <select
                    className="selectSort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="input">Sort by Input</option>
                    <option value="date">Sort by Date</option>
                    <option value="type">Sort by type</option>
                    <option value="purpose">Sort by Purpose</option>
                    <option value="amount-asc">
                      Sort by amount (ascending)
                    </option>
                    <option value="amount-desc">
                      Sort by amount (descending)
                    </option>
                    <option value="checked">Sort by Paid Status</option>
                    <option value="unchecked">Sort by Unpaid Status</option>
                  </select>
                  <button
                    className="btn btn btn-secondary"
                    onClick={handleClearList}
                  >
                    Clear
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <TransactionItemList
            items={sortedItems}
            onDeleteItem={handleDeleteItem}
            onCheckedItem={handleCheckedItems}
            onAddItem={handleAddItem}
          />
        </div>
      </div>
    </div>
  );
}

export default RightDivContent;
