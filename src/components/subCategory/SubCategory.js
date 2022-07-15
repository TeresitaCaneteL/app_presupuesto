import React from 'react';
import {useContext } from 'react';
import { BudgetsContext } from '../contexts/BudgetContext'
import {Card,Stack, Button,Container} from "react-bootstrap"
import CardBudget from '../cardBudget/CardBudget'


const Subcategoy = (budgetId) => {
  const {getBudgetExpenses, budgets, expenses, deleteExpense} = useContext(BudgetsContext)
  const expense = getBudgetExpenses(budgetId)


  return (
    <Container>
     <Card>
      <Card.Body>
      <Stack direction="vertical" gap="3">
          {expenses.map(expense => (
            <Stack direction="horizontal" gap="2" key={expense.id}>
                 <strong><div className="p-9 fs-4">Categoria: {expense.budgetName}</div></strong>
              <div className="me-auto fs-4">Gasto: {expense.description}</div>
              <div className="fs-5">
              monto:  {expense.amount}
              </div>
              <Button
                onClick={() => deleteExpense(expense)}
                size="sm"
                variant="outline-danger"
              >
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Card.Body>
    </Card>
    </Container>
  );
};

export default Subcategoy;