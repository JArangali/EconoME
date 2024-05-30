import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTransactionForm from "./AddTransactionForm";

function LeftDivContent({ onAddItem, totalIncome, totalExpense }) {
  // receive onAddItem as a prop
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleClose = () => setIsModalOpen(false);
  const handleShow = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (transactionData) => {
    const newTransactionItem = {
      id: new Date().getTime(),
      date: transactionData.date, // Use the date from the form submission
      type: transactionData.type,
      purpose: transactionData.purpose,
      amount: parseInt(transactionData.amount),
      reason: transactionData.reason,
      isChecked: false,
    };
    onAddItem(newTransactionItem);
  };

  useEffect(() => {
    // This will cause the component to re-render whenever totalIncome or totalExpense changes
  }, [totalIncome, totalExpense]);

  // Add a separate function to format the amount
  function formatAmount(amount: number): string {
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <div className="LeftDivContent">
      <div className="Income">
        <h4>{totalIncome < 0 ? "Deficit" : "Income"}</h4>
        <h4>₱{formatAmount(totalIncome)}</h4>
        <Button
          className="btncircleIncome"
          onClick={() => handleShow("Income")}
        >
          Add
        </Button>
      </div>

      <div className="Expense">
        <h4>Expense</h4>
        <h4>₱{formatAmount(totalExpense)}</h4>
        <Button
          className="btncircleExpense"
          onClick={() => handleShow("Expense")}
        >
          Add
        </Button>
      </div>

      <Modal
        show={isModalOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "Income" ? "Add Income" : "Add Expense"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTransactionForm
            type={modalType}
            onSubmit={handleFormSubmit}
            allowedPurposes={{
              Income: ["Savings"],
              Expense: [
                "Household",
                "Transportation",
                "Personal",
                "Education",
                "Others",
              ], // or some other default options
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LeftDivContent;
