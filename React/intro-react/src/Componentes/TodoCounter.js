import React from 'react';
import {TodoContext} from './TodoContext.js';


function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
        <h2>LLevas {completedTodos} de {totalTodos} tareas completadas</h2>
  );
}

export { TodoCounter };
