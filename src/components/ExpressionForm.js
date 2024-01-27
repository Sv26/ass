// src/components/ExpressionForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ExpressionForm = ({ onAddExpression }) => {
  const [ruleType, setRuleType] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');
  const [score, setScore] = useState('');

  const handleAddExpression = () => {
    // Validate numeric input fields
    const numericValue = parseFloat(value);
    const numericScore = parseFloat(score);

    if (
      ruleType &&
      operator &&
      !isNaN(numericValue) &&
      !isNaN(numericScore)
    ) {
      onAddExpression({
        ruleType,
        operator,
        value: numericValue,
        score: numericScore,
      });

      // Clear form fields after adding expression
      setRuleType('');
      setOperator('');
      setValue('');
      setScore('');
    } else {
      // Handle validation error, show a message or use a validation state
      console.error('Invalid input. Please check numeric fields.');
    }
  };

  return (
    <Form>
      <Form.Group controlId="ruleType">
        <Form.Label>Rule Type</Form.Label>
        <Form.Control
          as="select"
          value={ruleType}
          onChange={(e) => setRuleType(e.target.value)}
        >
          <option value="">Select Rule Type</option>
          <option value="Age">Age</option>
          <option value="Credit Score">Credit Score</option>
          <option value="Account Balance">Account Balance</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="operator">
        <Form.Label>Operator</Form.Label>
        <Form.Control
          as="select"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="">Select Operator</option>
          <option value=">">{'>'}</option>
          <option value="<">{'<'}</option>
          <option value="≥">{'≥'}</option>
          <option value="≤">{'≤'}</option>
          <option value="=">{'='}</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="value">
        <Form.Label>Value</Form.Label>
        <Form.Control
          type="number" // Use number input type for numeric values
          placeholder="Enter Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="score">
        <Form.Label>Score</Form.Label>
        <Form.Control
          type="number" // Use number input type for numeric values
          placeholder="Enter Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" onClick={handleAddExpression}>
        Add Expression
      </Button>
    </Form>
  );
};

export default ExpressionForm;
