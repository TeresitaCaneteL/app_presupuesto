import React, { useContext, useState, createContext } from 'react'
import { v4 as uuidV4 } from 'uuid'
import UseLocalStorage from "../useLocalStorage/UseLocalStorage"

export const BudgetsContext = React.createContext({})
const {Provider} = BudgetsContext

export const BudgetsProvider= ({children }) => {
  const [ budgets, setBudgets ] = UseLocalStorage("budgets", [])
  const [ expenses, setExpences ] = UseLocalStorage("expenses", [])

  function deleteExpense({ id }) {
    setExpences(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== id)
    })

  }

  function deleteBudget({ id }) {
    setBudgets(prevBudget => {
      return prevBudget.filter(budget => budget.id !== id)
    })

  }
  //agregar presupuesto
  function addBudget({ name, max }) {
    setBudgets(prevBudgets => {
      if (prevBudgets.find(budget => budget.name === name)) {
          const newBudget =[...prevBudgets]
          for(const e of newBudget) {
            //console.log(name)
            if(e.name === name)
            e.max=e.max += max
          }
        return newBudget
      }

      return [...prevBudgets, { id: uuidV4(), name, max }]

    })
  }
  //agregar gasto de la categoria
  function addExpense({ description, amount, budgetId, budgetName}) {
    setExpences(prevExpenses => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId,budgetName }]
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
    getBudgetExpenses,
    deleteExpense
  }


  return(
    <Provider value={context}>
      {children}

    </Provider>

  )
}
