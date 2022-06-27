import React from "react";
import './Todos.css'

const Todos = (props) => {
  return <div className="todos_task">
    {props.data.map(row => 
      <div>
        <h3>{row.name}</h3>
        <ul>
          {row.items.map(item => 
          <div>
              <h4>{item.text}</h4>
            <button onClick={() => props.deleteTodosAC({id: item.id, row: row.id})}>delete</button>
          </div>
          )}
        </ul>
        <textarea cols="15" rows="3"></textarea>
        <button onClick={() => props.addTodosAC({text: 'adasdas', id: Math.random(), row: row.id})}>Add</button>
      </div>
    )}
  </div>
}


export default Todos;