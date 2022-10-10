// import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense';
function App() {
  const expense=[
    {
      date: new Date(2022, 8, 9),
     title: "Car Insurance",
     amount: 34.34
    },
    {
      date: new Date(2022, 8, 9),
      title: "Child fees",
      amount: 854.34
     },
     {
      date: new Date(2022, 8, 9),
      title: "Room rent",
      amount: 82734.34
     },
     {
      date: new Date(2022, 8, 9),
      title: "Travel charges",
      amount: 393.34
     },
  ]
 
  return ( 
  <div>
 <Expense items={expense}/>
  </div>
  );
}

export default App;
