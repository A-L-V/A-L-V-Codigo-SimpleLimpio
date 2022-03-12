import React from 'react';
import { TodoContext } from './TodoContext';

function TodoForm () {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (evento) => {
        evento.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    const onChange = (evento) => {
        setNewTodoValue(evento.target.value);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>..</label>   
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='insertar tu To do'
            >        
            </textarea>
            <div>
                <button onClick={onCancel}
                    type="button"
                >
                    Cancelar
                </button>
                <button  type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}