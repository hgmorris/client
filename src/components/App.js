// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';



function App() {
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <h1>HelloWorld</h1>
      <Router>
          <Route path="/ExpenseForm" component={ExpenseForm} />
          <Route path="/ExpenseList" component={ExpenseList} />
      </Router>
    </div>
  );
}

export default App;
