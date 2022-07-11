import { Modal, Form,Button } from "react-bootstrap"
import { useRef,useContext } from 'react';
import { BudgetsContext } from '../contexts/BudgetContext'

export default function AddExpenseModal({show, handleClose, defaultBudgetId}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { addExpense, budgets } = useContext(BudgetsContext);

  function handleSubmit(e){
    e.preventDefault()
    addExpense(
    {
      description:descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId:budgetIdRef.current.value,
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
          <Form.Group className="mb-3" ref={amountRef} controlId="amount">
            <Form.Label>Gasto</Form.Label>
            <Form.Control  type="number" required min={0} step={1}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Presupuesto</Form.Label>
            <Form.Select >

            <option value="1">One</option>
            <option value="2">Two</option>
             <option value="3">Three</option>

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
