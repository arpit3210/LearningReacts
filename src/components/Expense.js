import './Expense.css'
import ExpenseItem from './ExpenseItem.js';


function Expense()
{
    const expense=[
        {date: new Date(2022, 8, 9),
         title: "Car Insurance",
         amount: 34.34
        },
        {date: new Date(2022, 8, 9),
          title: "Child fees",
          amount: 854.34
         },
         {date: new Date(2022, 8, 9),
          title: "Room rent",
          amount: 82734.34
         },
         {date: new Date(2022, 8, 9),
          title: "Travel charges",
          amount: 393.34
         },
      ]
    return ( <div className='expenses'>
          <ExpenseItem  date={expense[0].date} title={expense[0].title} amount={expense[0].amount} ></ExpenseItem>
   <ExpenseItem  date={expense[1].date} title={expense[1].title} amount={expense[1].amount} ></ExpenseItem>
   <ExpenseItem  date={expense[2].date} title={expense[2].title} amount={expense[2].amount} ></ExpenseItem>
   <ExpenseItem  date={expense[3].date} title={expense[3].title} amount={expense[3].amount} ></ExpenseItem>
    </div> );
}

export default Expense;