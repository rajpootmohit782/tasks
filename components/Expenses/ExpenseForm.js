import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = (e) => {

    const titleChangeHandeler = (e) =>{
          console.log(e.target.value)
    }

    
    const AmountChangeHandeler = (e) =>{
        console.log(e.target.value)
  }
  
  
  const DateChangeHandeler = (e) =>{
    console.log(e.target.value)
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
        <button type='submit' onClick={console.log('clicked')}>Add Expense</button>
    </div>
   </form>
  )
}

export default ExpenseForm