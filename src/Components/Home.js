import React, { useState, useEffect } from "react";
import TransactionItemList from "./TransactionItemList";
import LeftDivContent from "./LeftDivContent"; // import LeftDivContent
import API from "../API/API.js";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Stack } from "@mui/material";

import "../Luis.css";

function RightDivContent() {
  const [items, setItems] = useState([
    {
      id: 1,
      date: "11/14/24",
      type: "Expense",
      purpose: "Household",
      amount: 2000,
      reason: "Water",
      isChecked: false,
    },
    {
      id: 2,
      date: "09/17/24",
      type: "Income",
      purpose: "Savings",
      amount: 20000,
      reason: "SSS",
      isChecked: false,
    },
    {
      id: 3,
      date: "12/08/24",
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
    let income = 0;

    items.forEach((item) => {
      if (item.type === "Expense" && item.isChecked === false) {
        expense += item.amount;
      } else if (item.type === "Income") {
        income += item.amount;
      }
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [items]);

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

  const [savingsAmount, setSavingsAmount] = useState(0);
  const [householdAmount, setHouseholdAmount] = useState(0);
  const [transportationAmount, setTransportationAmount] = useState(0);
  const [personalAmount, setPersonalAmount] = useState(0);
  const [educationAmount, setEducationAmount] = useState(0);
  const [othersAmount, setOthersAmount] = useState(0);

  useEffect(() => {
    let savingsAmount = 0;
    let householdAmount = 0;
    let transportationAmount = 0;
    let personalAmount = 0;
    let educationAmount = 0;
    let othersAmount = 0;

    items.forEach((item) => {
      if (item.purpose === "Savings") {
        savingsAmount += item.amount;
      } else if (item.purpose === "Household") {
        householdAmount += item.amount;
      } else if (item.purpose === "Transportation") {
        transportationAmount += item.amount;
      } else if (item.purpose === "Personal") {
        personalAmount += item.amount;
      } else if (item.purpose === "Education") {
        educationAmount += item.amount;
      } else if (item.purpose === "Others") {
        othersAmount += item.amount;
      }
    });

    setSavingsAmount(savingsAmount);
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
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
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

  return (
    <div className="Home">
      <div className="HomeContent">
        <API />
        <div className="Chart_Content">
          <center>
            <h1> Your Expenses</h1>
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
                    { id: "savings", value: savingsAmount, label: "Savings" },
                    {
                      id: "household",
                      value: householdAmount,
                      label: "Household",
                    },
                    {
                      id: "transportation",
                      value: transportationAmount,
                      label: "Transportation",
                    },
                    {
                      id: "personal",
                      value: personalAmount,
                      label: "Personal",
                    },
                    {
                      id: "education",
                      value: educationAmount,
                      label: "Education",
                    },
                    { id: "others", value: othersAmount, label: "Others" },
                  ],
                },
              ]}
              width={500}
              height={300}
              margin={{ right: 200 }}
            />
          </Stack>
        </div>
        <LeftDivContent
          onAddItem={handleAddItem}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />{" "}
      </div>

      <div className="RightDivContent">
        {/* pass handleAddItem as a prop */}
        <div className="Transactions">
          <table className="transtable">
            <tr>
              <td className="flex-container">
                <h4>Transactions </h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="input">Sort by Input</option>
                  <option value="date">Sort by Date</option>
                  <option value="type">Sort by type</option>
                  <option value="purpose">Sort by Purpose</option>
                  <option value="amount-asc">Sort by amount (ascending)</option>
                  <option value="amount-desc">
                    Sort by amount (descending)
                  </option>
                  <option value="checked">Sort by Status</option>
                </select>
                <button className="clear-button" onClick={handleClearList}>
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
  );
}

export default RightDivContent;
