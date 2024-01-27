
// src/components/ExpenseForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/addExpense', { description, category, amount });
      console.log('Expense added successfully');
      // Add logic for updating UI or navigating to another page
    } catch (error) {
      console.error('Error adding expense:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
