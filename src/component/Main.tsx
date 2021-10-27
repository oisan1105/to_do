import React from 'react';
import Memo from './Memo';
import {MemoType} from '../type/Memo';
import { useSelector } from '../stores/index'

function Main() {
  const MemoList = useSelector(state => state.memoList);
  
  console.log(MemoList)
  return (
   <div className='Main'>
    {
      MemoList.map((memo)=><Memo memo={memo} key={memo.id} />)
    }
   </div>
  );
}

export default Main;
