import React, { useContext, useState, createContext } from 'react'
import { v4 as uuidV4 } from 'uuid'
import UseLocalStorage from "../useLocalStorage/UseLocalStorage"

export const BudgetsContext = React.createContext({})
const {Provider} = BudgetsContext

export const BudgetsProvider= ({children }) => {
  const [ budgets, setBudgets ] = UseLocalStorage("budgets", [])
  const [ expenses, setExpences ] = UseLocalStorage("expenses", [])

  const deleteBudget = ()=>{
    setBudgets([]);
  }

  //agregar presupuesto
  function addBudget({ name, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budget => budget.name === name)) {
        return prevBudgets
      }
      return [...prevBudgets, { id: uuidV4(), name, max }]
    })
  }
  //agregar gasto de la categoria
  function addExpense({ description, amount, budgetId }) {
    setExpences(prevExpenses => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
    })
  }

  function getBudgetExpenses(budgetId) {
    return expenses.filter(expense => expense.budgetId === budgetId)
  }

  const context ={
    budgets,
    addBudget,
    setBudgets,
    expenses,
    setExpences,
    addExpense,
    getBudgetExpenses
  }


  return(
    <Provider value={context}>
      {children}

    </Provider>

  )
}
