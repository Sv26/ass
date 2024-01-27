// src/App.js

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ExpressionEditor from './components/ExpressionEditor';

function App() {
  const [showEditor, setShowEditor] = useState(false);

  const handleOpenEditor = () => setShowEditor(true);
  const handleCloseEditor = () => setShowEditor(false);

  return (
    <div className="App">
      <h1>Expression Engine UI</h1>
      <Button variant="primary" onClick={handleOpenEditor}>
        Open Expression Editor
      </Button>
      <ExpressionEditor show={showEditor} handleClose={handleCloseEditor} />
    </div>
  );
}

export default App;
