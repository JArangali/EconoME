import React, { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";

function AddTransactionForm({ type, onSubmit }) {
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, purpose, amount, date });
  };

  return (
    <AddTransactionModal
      onSubmit={handleSubmit}
      type={type}
      purpose={purpose}
      setPurpose={setPurpose}
      amount={amount}
      setAmount={setAmount}
      date={date}
      setDate={setDate}
    />
  );
}

export default AddTransactionForm;
