import React from 'react';
import { BudgetsContext } from '../contexts/BudgetContext'
import {useContext } from 'react';
import CardBudget from '../cardBudget/CardBudget';

const TotalBudget = () => {
  const {  expenses,  budgets } = useContext(BudgetsContext);
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if ( max === 0) return null
  return (
   <CardBudget amount={amount} name="Total" gray max={max} hideButtons/>
  );
};

export default TotalBudget;