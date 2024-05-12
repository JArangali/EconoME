import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTransactionForm from "./AddTransactionForm";
import Chart from "./Chart";

function LeftDivContent({ onAddItem }) {
  // receive onAddItem as a prop
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'income' or 'expense'

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

  return (
    <div className="LeftDivContent">
      <div className="Income">
        <h4>Income</h4>
        <h4>10,000</h4>
        <Button
          className="btncircleIncome"
          onClick={() => handleShow("income")}
        >
          Add
        </Button>
      </div>

      <div className="Expense">
        <h4>Expense</h4>
        <h4>10,000</h4>
        <Button
          className="btncircleExpense"
          onClick={() => handleShow("expense")}
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
            {modalType === "income" ? "Add Income" : "Add Expense"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTransactionForm type={modalType} onSubmit={handleFormSubmit} />
        </Modal.Body>
      </Modal>

      <Chart />
    </div>
  );
}

export default LeftDivContent;
