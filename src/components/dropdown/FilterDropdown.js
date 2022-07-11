import Dropdown from 'react-bootstrap/Dropdown';

function FilterDropdown() {
  return (
    <div className="mt-4">
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hogar</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Financiero</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>

  );
}

export default FilterDropdown;