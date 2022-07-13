import {Card, ProgressBar, Stack, Button, Container} from "react-bootstrap"

export default function CardBudget({name,amount,max,gray,onAddExpenseClick,hideButtons,}) {
    const classNames = []
    if (amount > max) {
      classNames.push("bg-danger", "bg-opacity-10")
    } else if (gray) {
      classNames.push("bg-light")
    }
    //console.log(name)
    return (
      <Container>
      <Card className={classNames.join(" ")}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{name}</div>
            <div className="d-flex align-items-baseline">
              {(amount)}
              {max && (
                <span className="text-muted fs-6 ms-1">
                  / {(max)}
                </span>
              )}
            </div>
          </Card.Title>
          {max && (
            <ProgressBar
              className="rounded-pill"
              variant={getProgressBarVariant(amount, max)}
              min={0}
              max={max}
              now={amount}
              gray
            />
          )}

          {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
             Agregar Gasto
            </Button>

          </Stack>
        )}
        </Card.Body>
      </Card>
      </Container>
    )
  }

  function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger"}