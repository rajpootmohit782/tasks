import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = props =>{

  

    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    if(props.items.length === 1){
        return <h2 className="expenses-list__fallback">Found expenses only One
        <ul>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )) 
  }
  </ul>
        </h2>
    }
   return(
 <ul>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )) 
  }
  </ul>
   )
}


export default ExpenseList;