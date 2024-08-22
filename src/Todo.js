import React, { useEffect, useState } from 'react';
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table } from 'react-bootstrap';

function Todo() {

  const [newTodo, setNewTodo] = useState();
  const [todos, setTodos] = useState([]);

  function Addtodo() {
    let newTodos = [...todos, { todo: newTodo.trim() }]
    setTodos(newTodos); // Update the state with the new list of todos
    setNewTodo("")
    console.log(newTodos)
  }

  return (
    <Container fluid>
      <h6 className='text-center display-3'>Enter your task</h6>
      <input type='text' className='form-control' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <br />
      <button className='btn btn-primary' onClick={Addtodo}>save task</button>
      <hr />
      <Table className='table'>
        <thead>
          <tr>
            <th>All Task</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((tod) => (
              <tr>
                <td>{tod.todo}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Todo