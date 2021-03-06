
import { Stack, Container, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBudget from "./components/cardBudget/CardBudget"
import SubCategory from "./components/subCategory/SubCategory"
import AddBudgetModal from "./components/addBudgetModal/AddBudgetModal"
import AddExpenseModal from "./components/addBudgetModal/AddExpensesModal"
import TotalBudget from "./components/totalBudget/Totalbudget";
import { useState,useContext } from 'react';
import { BudgetsContext } from './components/contexts/BudgetContext'


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal]= useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const {budgets, getBudgetExpenses} = useContext(BudgetsContext)

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }
  return (
    <>
    <Container>
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto">Presupuesto</h1>
      <Button variant="success" onClick={() => setShowAddBudgetModal(true)}>Agregar presupuesto</Button>

    </Stack>

    <div  style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}>
            {budgets.map(budget => {
             //console.log(budgets,'budget')
              const amount = getBudgetExpenses(budget.id).reduce(
                (total, expense) => total + expense.amount,0)

           return (

              <CardBudget
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}/>
            )
          })}
      <TotalBudget/>

      </div>
      <SubCategory/>
          <AddExpenseModal
            show={showAddExpenseModal}
            defaultBudgetId={addExpenseModalBudgetId}
            handleClose={() => setShowAddExpenseModal(false)}/>
          <AddBudgetModal show={showAddBudgetModal} handleClose={()=> setShowAddBudgetModal(false)}/>
          </Container>
    </>
  );
}
export default App;
