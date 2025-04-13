import {useState} from "react";
import App from "./App";
import Inputform from "./ExpenseInput";
import { use } from "react";
function TableInput ({expenses}){

  return(
<>
<table className="right-table">
  <thead>
    <tr className="headers">
      <th>Expense</th>
      <th>Description</th>
      <th>Category</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
  {expenses.map((expense, index) => (
    <tr key={index}>
      <td>{expense.expense}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
    </tr>
  ))}

  </tbody>
</table>
</>
    );
};

export default TableInput;

