import React from 'react';
import "./TodoCreateButton.css"


function TodoCreateButton(props) {
  
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }

  return (
    <button
      className='CreateTodoButton'
      onClick={onClickButton}
      >
      +
    </button>
  );
}

export {TodoCreateButton};
