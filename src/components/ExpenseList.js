

// ----------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the server
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getExpenses');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error.message);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.description} - {expense.amount} - {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
