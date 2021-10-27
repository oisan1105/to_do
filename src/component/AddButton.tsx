import React from 'react';



function AddButton (props:{Add:React.MouseEventHandler<HTMLButtonElement>}) {
  const Add = props.Add
  return (
    <button className='AddButton' onClick={Add}>
      +
    </button>
    );
}

export default AddButton;
