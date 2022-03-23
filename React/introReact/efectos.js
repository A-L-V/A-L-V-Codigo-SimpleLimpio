//recarga en todo las vecez de redenrizacion
React.useEffect(()=> {
    console.log("se usa el efect ")
})

//recarga una sola vez
React.useEffect(()=> {
    console.log("se usa el efect ")
},[])

// se ejecuta solo cuando cambia el newItem
React.useEffect(()=> {
    console.log("se usa el efect ")
},[newItemLenght])

//ejemplo de que esta cargando, error, 
<TodoList>
{error && <p>Desespérate, hubo un error...</p>}
{loading && <p>Estamos cargando, no desesperes...</p>}
{(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

{searchedTodos.map(todo => (
  <TodoItem
    key={todo.text}
    text={todo.text}
    completed={todo.completed}
    onComplete={() => completeTodo(todo.text)}
    onDelete={() => deleteTodo(todo.text)}
  />
))}
</TodoList>

//uso con cumtosHooK Local Storage

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    
    //dar informacion si hay errores
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    });
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }