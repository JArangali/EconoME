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
      date: new Date().toLocaleDateString(),
      type: transactionData.type,
      purpose: transactionData.purpose,
      amount: parseInt(transactionData.amount),
      isChecked: false,
    };
    onAddItem(newTransactionItem); // call onAddItem
  };

  useEffect(() => {
    // This will cause the component to re-render whenever totalIncome or totalExpense changes
  }, [totalIncome, totalExpense]);

  return (
    <div className="LeftDivContent">
      <div className="Income">
        <h4>Income</h4>
        <h4>{totalIncome}</h4>
        <Button
          className="btncircleIncome"
          onClick={() => handleShow("Income")}
        >
          Add
        </Button>
      </div>

      <div className="Expense">
        <h4>Expense</h4>
        <h4>{totalExpense}</h4>
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
