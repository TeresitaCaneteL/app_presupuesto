import { Modal, Form,Button } from "react-bootstrap"
import { useRef,useContext } from 'react';
import { BudgetsContext } from '../contexts/BudgetContext'

export default function AddExpenseModal({show, handleClose, defaultBudgetId}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const {  addExpense, budgets } = useContext(BudgetsContext);
  //console.log(budgets, 'hola')

  function handleSubmit(e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseInt(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    })
    handleClose()
  }
  return (

    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo gasto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control ref={descriptionRef} type="text" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Gasto</Form.Label>
            <Form.Control  ref={amountRef} type="number" required min={0} step={1}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Presupuesto</Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
            {budgets.map(budget => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
               //console.log(budget.id,'holo')
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Agregar
            </Button>
          </div>
        </Modal.Body>
      </Form>

    </Modal>
  )
}
