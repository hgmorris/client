// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Switch from 'react-switch';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      <Router>
        <Switch>
          <Route path="/add" component={ExpenseForm} />
          <Route path="/list" component={ExpenseList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
