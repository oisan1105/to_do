import React from 'react';



function FavoriteButton (props:{Favorite:React.MouseEventHandler<HTMLButtonElement>,isFavorite:boolean}) {
  const Favorite = props.Favorite
  const isFavorite = props.isFavorite
  return (
    <button className='FavoriteButton' onClick={Favorite}> 
      {isFavorite?'♥':'♡'}
    </button>
  );
}

export default FavoriteButton;
