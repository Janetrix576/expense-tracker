import React from 'react'
import { useState } from 'react'
import './App.css'
import Inputform from './ExpenseInput'
import TableInput from './TableInput'

function App() {

  const [expenses, setExpenses] = useState([
    {
      expense: "Grocery Shopping",
      description: "Weekly grocery shopping at the local supermarket",
      category: "Food & Groceries",
      amount: "Ksh 10,570",
      date: "April 5, 2025",
    },
    {
      expense: 'Internet Bill',
      description: 'Monthly payment for internet service',
      category: 'Utilities',
      amount: 'Ksh 6,458.60',
      date: 'April 3, 2025',
    },
    {
      expense: 'Coffee with Friends',
      description: 'Afternoon coffee at the local café with friends',
      category: 'Entertainment',
      amount: 'Ksh 1,680',
      date: 'April 6, 2025',
    },
    {
      expense: 'Car Fuel',
      description: 'Full tank of gas for the car',
      category: 'Transportation',
      amount: 'Ksh 7,000',
      date: 'April 4, 2025',
    },
    {
      expense: 'Movie Tickets',
      description: 'Two tickets for the latest movie release',
      category: 'Entertainment',
      amount: 'Ksh 3,080',
      date: 'April 7, 2025',
    },


  ]);

  const [searchTerm, setSearchTerm] = useState('')

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  
  const filteredExpenses = expenses.filter((expense) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
  
    const matchesSearch =
      expense.expense.toLowerCase().includes(lowerCaseSearch) 
    return matchesSearch;
  });
  
  return (
    <>
    <header className='header'>Expense Tracker</header> 
    <div className='p-holder'>
    <p className='statement'> Start taking control of you Expenses and life .Record, categorise and analyze your spending.</p>
    </div>
    <input type="search" 
    placeholder='🔍Search Expenses'
     className='search-input'
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     />
    <div className='container'>
    <div className='left-form'>
   <div className='expense-header'>
    <h2>Add Expense</h2>
    <p className='p-tag'>Enter your expense details below</p>
    </div>
 <div>    
      <Inputform onAddExpense={addExpense} />

      </div>
    </div>
    <TableInput expenses={filteredExpenses} />

    </div>
    </>
  )
}

export default App

