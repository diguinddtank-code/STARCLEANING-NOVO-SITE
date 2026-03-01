import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import QuoteLanding from './src/pages/QuoteLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<QuoteLanding />} />
      </Routes>
    </Router>
  );
}

export default App;