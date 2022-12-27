import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (e) => {

    const [enteredTitle, setEnteredTitle] = useState(' ');
    const [enteredAmount, setEnteredAmount] = useState(' ');
    const [enteredDate, setEnteredDate] = useState(' ');

  // const [userInput, setUserInput] = useState(
  //  {
  //  enteredTitle: '',
  //  enteredAmount: '',
  //  enteredDate: ''
  //  }
  // )

    const titleChangeHandeler = (e) =>{
       //   setUserInput((prevState) =>{
       //    return {...prevState, enteredTitle: e.target.value}
       //   })

       setEnteredTitle(e.target.value)
    }

    
    const AmountChangeHandeler = (e) =>{
       // setUserInput(
       //     {
       //     ...userInput,
       //     enteredAmount: e.target.value
        //    }
       // )

       setEnteredAmount(e.target.value)
  }
  
  
  const DateChangeHandeler = (e) =>{
   // setUserInput(
    //    {
   //     ...userInput,
   //     enteredDate: e.target.value
   //     }
   // )

   setEnteredDate(e.target.value)
}

const  submitHandler = (e) =>{
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate) 
    }

    console.log(expenseData)
}
  return (
    
   <form>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange= {titleChangeHandeler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange= { AmountChangeHandeler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2022-12-31" onChange= {DateChangeHandeler}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit' onClick={submitHandler}>Add Expense</button>
    </div>
   </form>
  )
}

export default ExpenseForm