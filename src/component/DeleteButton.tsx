import React from 'react';



function  DeleteButton (props:{Delete:React.MouseEventHandler<HTMLButtonElement>}) {
  const Delete = props.Delete
  return (
    <button className='DeleteButton' onClick={Delete}>
      ×
    </button>
  );
}

export default DeleteButton;
