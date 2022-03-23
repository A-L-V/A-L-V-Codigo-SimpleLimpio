import React from "react";
import {useLocalStorage} from './useLocalStorage.js';


const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      }= useLocalStorage('TODOS_V1', []);
      const [search, setSearch] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);


      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      
      let searchedTodos = [];
    
      if(!search.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searctText = search.toLowerCase();
          return todoText.includes(searctText);
        })
      }
    
      const completeTodo = (id) => {
        const todoIndex =  todos.findIndex( todo => todo.id===id);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed){
          newTodos[todoIndex].completed = false;
        }else {
          newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos);
      }
    
      const deleteTodo = (id) => {
        const todoIndex =  todos.findIndex( todo => todo.id===id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
      }
      
      const addTodo = (text) => {
        const newTodo = {
          id: todos.length+1 || 1,
          text: text,
          completed: false
        } 
        const newTodos = [...todos];
        newTodos.push(newTodo);
        saveTodos(newTodos);
      }
    //   }
    
      // React.useEffect(() => {
      //   console.log("react usa efecto")
      // }, [totalTodos])
    //[] una vez, 
    //[totalTodos] cuando cambia totalTodos
    

    return (
        <TodoContext.Provider value={
            {
                loading,
                error,
                totalTodos,
                completedTodos,
                search,
                setSearch,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo
            }
        }>
            {props.children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider};