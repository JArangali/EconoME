import React, { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";

const PURPOSE_OPTIONS = [
  "Saving",
  "Household",
  "Transportation",
  "Personal",
  "Education",
  "Others",
];

function AddTransactionForm({ type, onSubmit }) {
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, purpose, amount, reason, date });
  };

  return (
    <AddTransactionModal
      onSubmit={handleSubmit}
      type={type}
      purpose={purpose}
      setPurpose={setPurpose}
      amount={amount}
      setAmount={setAmount}
      reason={reason}
      setReason={setReason}
      date={date}
      setDate={setDate}
      purposeOptions={PURPOSE_OPTIONS}
    />
  );
}

export default AddTransactionForm;
