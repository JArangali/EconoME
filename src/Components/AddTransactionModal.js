import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddTransactionModal({
  onSubmit,
  type,
  purpose,
  setPurpose,
  amount,
  setAmount,
  date,
  setReason,
  reason,
  setDate,
  purposeOptions,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Purpose</Form.Label>
        <Form.Control
          as="select"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
        >
          {purposeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Reason</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddTransactionModal;
