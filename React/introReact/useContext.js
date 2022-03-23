import { TodoContext } from "./context"
import { TodoList } from "./intro-react/src/Componentes/TodoList";


/**
 * Usar useContext con el context.js
 * podemos usarlo con: const { total,completed } = React.useContext(TodoContext)
 */
function AppUI(){
    const {   
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <TodoList>
        {error && <p>hubo error</p>}
        <TodoItem
        key={todo.text}
        text={todo.text}
        ></TodoItem>
        </TodoList>
    )
}