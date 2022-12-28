import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  //console.log(props.items)
  const filterChangeHandler =()=>{
   
  }
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter = {filterChangeHandler} />
      {
        props.items.map( expense =>
          
           <ExpenseItem 
           key = {expense.id}
           title= {expense.title} 
           amount = {expense.amount} 
           date= {expense.date}/>)
      }
     
    </Card>
  );
}

export default Expenses;