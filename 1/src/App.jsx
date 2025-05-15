import React, { useState } from "react";

function formatNumber(num) {
  return num.toLocaleString();
}

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!category.trim() || !amount || isNaN(Number(amount))) return;
    setExpenses([
      ...expenses,
      { category: category.trim(), amount: Number(amount) },
    ]);
    setCategory("");
    setAmount("");
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const avgDaily = total / 30;
  const top3 = [...expenses].sort((a, b) => b.amount - a.amount).slice(0, 3);

  return (
    <div className="container">
      <h1>Monthly Expense Calculator</h1>
      <form className="expense-form" onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Add Expense</button>
      </form>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, idx) => (
            <tr key={idx}>
              <td>{exp.category}</td>
              <td>{formatNumber(exp.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="results">
        <div>
          <strong>Total Expenses:</strong> ${formatNumber(total)}
        </div>
        <div>
          <strong>Average Daily Expense:</strong> $
          {formatNumber(Math.round(avgDaily))}
        </div>
        <div>
          <strong>Top 3 Largest Expenses:</strong>
          <ol>
            {top3.map((exp, idx) => (
              <li key={idx}>
                {exp.category} (${formatNumber(exp.amount)})
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
