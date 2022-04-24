import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    const filteredYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    

    return (

        <li>
            <Card className='expenses'>
            <ExpensesFilter 
            selected={filteredYear} 
            onSaveYear={filteredYearHandler} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
        </li>
    );
}

export default Expenses;