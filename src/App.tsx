import React from 'react';
import Sub from './component/Sub';
import Main from './component/Main';
import './App.css';
import AddButton from './component/AddButton';
import { useDispatch } from 'react-redux';
import { addMemo, deleteMemo } from './stores/memoList';
import { MemoType } from './type/Memo'


function App() {
  const dispatch = useDispatch();
  const Add = () =>{
    const id:string = getId()
   function getId(){
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let rand_str = '';
    for ( let i = 0; i < 8; i++ ) {
      rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return rand_str
    }
    const memo:MemoType={
      "created_dt":new Date(),
      "text":'unko',
      "category":'cooking',
      "favorite":true,
      "id": id
    }
    console.log('addbutton')
    dispatch(addMemo(memo))
  }
  return (
    <div className="App">
      <div className='container main' ><Main /></div>
      <div className='container sub' ><Sub /></div>
      <div className='add-button'>
        <AddButton Add={Add} />

      </div>
    </div>
  );
}

export default App;
