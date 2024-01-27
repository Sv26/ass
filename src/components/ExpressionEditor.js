// src/components/ExpressionEditor.js

import React, { useState } from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';
import ExpressionForm from './ExpressionForm';

const ExpressionEditor = ({ show, handleClose }) => {
  const [expressions, setExpressions] = useState([]);
  const [connectorType, setConnectorType] = useState('AND');

  const handleAddExpression = (expression) => {
    setExpressions([...expressions, expression]);
  };

  const handleDeleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleSave = () => {
    // Save expressions and connectorType to localStorage
    localStorage.setItem('savedExpressions', JSON.stringify(expressions));
    localStorage.setItem('savedConnectorType', connectorType);

    console.log('Expressions saved:', expressions);
    console.log('Connector Type:', connectorType);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Expression Editor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Connector Type:</label>
        <select
          value={connectorType}
          onChange={(e) => setConnectorType(e.target.value)}
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>

        <ExpressionForm onAddExpression={handleAddExpression} />

        <ListGroup>
          {expressions.map((exp, index) => (
            <ListGroup.Item key={index}>
              {`${exp.ruleType} ${exp.operator} ${exp.value} Score: ${exp.score}`}
              <Button
                variant="danger"
                size="sm"
                className="float-right"
                onClick={() => handleDeleteExpression(index)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Expressions
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExpressionEditor;
