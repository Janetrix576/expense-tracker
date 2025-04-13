import React, { useState } from "react";
import App from "./App";
import TableInput from "./TableInput";
function Inputform({onAddExpense}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function handleClickSubmit(event){
        event.preventDefault()

        const formData = {
            expense: title,
            description: description,
            category: category,
            amount: `Ksh ${parseFloat(amount).toLocaleString() }`,     
            date: date,
          };
      
          onAddExpense(formData);


        setTitle('');
        setDescription('');
        setCategory('');           

        setAmount('');
        setDate('');
    }

    function handleExpenseName(event){
        setTitle(event.target.value)
        console.log(title);
    }

    function handleDescription(event){
        setDescription(event.target.value)
        console.log(description);

    }

    function handleCategory(event){
        setCategory(event.target.value)
        console.log(category);

    }

    function handleAmount(event){
        setAmount(event.target.value)
    console.log(amount);    
    }

    function handleDate(event){
        setDate(event.target.value)
    console.log(date);    

    }

    return(
    <>
         <form onSubmit={handleClickSubmit} className="details-input">
         <input type="text"
          placeholder='Enter expense name'
          className='expense-input' 
         value={title}
         onChange={handleExpenseName}     />
         <input type="text" 
         placeholder='Enter description here' 
         className='description-input'
         value={description}
         onChange={handleDescription}
         />
         <input type="text"
          placeholder='Enter category'
           className='category-input'
           value={category}
           onChange={handleCategory}
           />
        <input type="number"
        min="1000"
        max="100,000"
        step="1000"
         placeholder='Enter amount' 
         className='amount-input'
         value={amount}
         onChange={handleAmount}
         />
        <input type="date"
         className='date-input'
         value={date}
         onChange={handleDate}
         />
        <button className='submit-btn' 
         type="submit">
    Submit
        </button> 
            </form>
    </>
    );
}
export default Inputform;

