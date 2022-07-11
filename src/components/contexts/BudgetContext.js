import React, { useContext, useState, createContext } from 'react'
import { v4 as uuidV4 } from 'uuid'
import UseLocalStorage from "../useLocalStorage/UseLocalStorage"

export const BudgetsContext = React.createContext({})
const {Provider} = BudgetsContext

export const BudgetsProvider= ({children }) => {
  const [ budgets, setBudgets ] = UseLocalStorage("budgets", [])
  const [ expenses, setExpences ] = UseLocalStorage("budgets", [])

  function getBudgetExpenses(budgetId) {
    return expenses.filter(expense => expense.budgetId === budgetId)
  }
  const deleteBudget = ()=>{
    setBudgets([]);
  }
  function addBudget({ name, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budget => budget.name === name)) {
        return prevBudgets
      }
      return [...prevBudgets, { id: uuidV4(), name, max }]
    })
  }

  const context ={
    budgets,
    addBudget,
    setBudgets,
    expenses,
    setExpences,
    getBudgetExpenses
  }


  return(
    <Provider value={context}>
      {children}

    </Provider>

  )
}
