import "./Expense.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from '../UI/Card';
function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
