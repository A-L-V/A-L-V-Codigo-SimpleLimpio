import React from 'react';
export { useLocalStorage };

//default de platzi
function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    };
  
    return [
      item,
      saveItem,
    ];
  }
  // como usarlo
  const [patito, savePatito] = useLocalStorage('PATITO_V1', 'FERNANDO');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);