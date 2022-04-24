import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isCollapsed, setIsCollapsed] = useState (true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsCollapsed(true);
    };

    const expandHandler = () => {
        setIsCollapsed(false);
    };

    const collapseHandler = () => {
        setIsCollapsed(true);
    }

    return <div className='new-expense'>
        {isCollapsed && <button onClick={expandHandler}>Add New Expense</button>}
        {!isCollapsed && <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={collapseHandler}
        />}
    </div>
};

export default NewExpense;