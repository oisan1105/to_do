import React from 'react';
import {MemoType} from '../type/Memo'
import Category from './Category'
import DeleteButton from './DeleteButton';
import FavoriteButton from './Favorite';
import { useDispatch } from 'react-redux';
import { addMemo, deleteMemo, favoriteMemo} from '../stores/memoList';


function Memo(props:{memo:MemoType}) {
  const {text,category,favorite,created_dt,id} =props.memo
  const dispatch = useDispatch();
  const date = `${created_dt.getFullYear()} / ${created_dt.getMonth()+1} / ${created_dt.getDate()} / ${created_dt.getHours()} : ${created_dt.getMinutes()}`
  const Delete = () =>{
    console.log('delete')
  }
  const Favorite = () =>{
    dispatch(favoriteMemo({id, favorite:!favorite}))
  } 
  
  

  return (
    <div className='Memo'>
      <div className='header'>
        <div><Category category={category} /></div>
        <div className='favorite-button'>
          <FavoriteButton Favorite={Favorite} isFavorite={favorite}/>
        </div>
        <div>
        <DeleteButton Delete={(Delete) => dispatch(deleteMemo(id))} />
        </div>
        </div>
      <p>{text}</p>
      <div className='date'>{date}</div>
    </div>
    );
}

export default Memo;
