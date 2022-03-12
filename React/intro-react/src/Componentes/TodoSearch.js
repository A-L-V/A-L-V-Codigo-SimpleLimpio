import React from 'react';
import {TodoContext} from './TodoContext';

function TodoSearch() {
  const {search, setSearch } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearch(event.target.value);
  };

  return [
        <input type="text" placeholder="busca por el nombre"
        onChange={onSearchValueChange}
        value={search}
        />
  ];
}

export { TodoSearch };