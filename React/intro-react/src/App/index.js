import React from 'react';
import {AppUI} from './AppUI';
import { TodoProvider } from '../Componentes/TodoContext.js';



function App() {
  
  return (
      <TodoProvider>
      <AppUI/>
      </TodoProvider>
  );
}

export default App;
