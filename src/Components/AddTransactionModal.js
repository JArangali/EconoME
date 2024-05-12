import React from "react";
import {
  Form,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

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
      <FormGroup className="mb-3">
        <FormLabel>Date</FormLabel>
        <FormControl
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Purpose</FormLabel>
        <FormControl
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
        </FormControl>
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Amount</FormLabel>
        <FormControl
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Reason</FormLabel>
        <FormControl
          type="text"
          placeholder="Enter Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </FormGroup>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}

export default AddTransactionModal;
