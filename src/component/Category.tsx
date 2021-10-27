import React from 'react';



function Category (props:{category:string}) {
  const category = props.category
  console.log(props.category)
  return (
  <div className='Category'>
    {category}
  </div>
    );
}

export default Category;
