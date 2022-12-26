import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const [title , SetTitle ] = useState(props.title);
  const [amount , SetAmount ] = useState(props.amount);
 
   const ClickHandler = ()=>{
    SetTitle('updated')
   }
   const Getdollor = ()=>{
   SetAmount('100')
   }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={ClickHandler} >Change Title</button>
      <button onClick={Getdollor} >Get Dollers</button>
    </Card>
  );
}

export default ExpenseItem;