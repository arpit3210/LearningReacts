// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem.js';
function App() {

  const expense=[
    {date: new Date(2022, 8, 9),
     title: "Car Insurance",
     amount: 234.34
    },
    {date: new Date(2022, 8, 9),
      title: "Car Insurance",
      amount: 234.34
     },
     {date: new Date(2022, 8, 9),
      title: "Car Insurance",
      amount: 234.34
     },
     {date: new Date(2022, 8, 9),
      title: "Car Insurance",
      amount: 234.34
     },
  ]
  return ( <div>
   <ExpenseItem  date={expense[0].date} title={expense[0].title} amount={expense[0].amount} ></ExpenseItem>
   <ExpenseItem  date={expense[1].date} title={expense[1].title} amount={expense[1].amount} ></ExpenseItem>
   <ExpenseItem  date={expense[0].date} title={expense[2].title} amount={expense[2].amount} ></ExpenseItem>
   </div>
  );
}

export default App;
