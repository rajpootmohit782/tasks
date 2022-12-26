import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
 
   const ClickHandler = ()=>{

   }
   const DeleteEvent = ()=>{

   }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ClickHandler} ></button>
      <button onClick={DeleteEvent} >Delete Event</button>
    </Card>
  );
}

export default ExpenseItem;