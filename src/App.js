
import { Stack, Container, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBudget from "./components/cardBudget/CardBudget"
import AddBudgetModal from "./components/addBudgetModal/AddBudgetModal"
import AddExpenseModal from "./components/addBudgetModal/AddExpensesModal"
import { useState,useContext } from 'react';
import { BudgetsContext } from './components/contexts/BudgetContext'


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal]= useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const {budgets} = useContext(BudgetsContext)

  const data =[JSON.stringify(budgets)]

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
      <Button variant="outline-success"onClick={openAddExpenseModal}>Agregar Gastos</Button>
    </Stack>
    </Container>
            {budgets.map(budget => {
              console.log(budgets,'budget')
           return (
              <CardBudget
                key={budget.id}
                name={budget.name}
                amount={10000}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              />
            )

          })}
          <AddExpenseModal
            show={showAddExpenseModal}
            defaultBudgetId={addExpenseModalBudgetId}
            handleClose={() => setShowAddExpenseModal(false)}
      />
            <AddBudgetModal show={showAddBudgetModal} handleClose={()=> setShowAddBudgetModal(false)}/>
    </>
  );
}
export default App;
