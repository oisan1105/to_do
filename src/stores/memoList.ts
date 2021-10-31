import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { memo } from "react";
import  { MemoType } from '../type/Memo'



// Stateの初期状態
const storage = localStorage.getItem('memoList');
const initialState:MemoType[] = storage === null ? []:JSON.parse(storage,reviver);
function reviver(key:string, val:any){
  if (typeof(val) == "string" &&
      val.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)){
      return new Date(Date.parse(val));
  }
  return val;
}

function updateStorage(state:MemoType[]){
localStorage.setItem('memoList', JSON.stringify(state))
}

const add: CaseReducer<MemoType[], PayloadAction<MemoType>> = (state, action) => {
  console.log(state,action)
  const memoList = [...state,action.payload]
  updateStorage(memoList);
  return memoList;
}

const remove: CaseReducer<MemoType[], PayloadAction<string>> = (state, action) => {
  console.log(state,action)
  const id = action.payload
  const memoList = state.filter(function( item ){
    console.log(item, id)
    return item.id !== id
  });
  updateStorage(memoList);
  return memoList;
}

const favorite: CaseReducer<MemoType[], PayloadAction<{id:string, favorite:boolean}>> = (state, action) => {
  const {id, favorite} = action.payload ;
  const targetMemoIndex = state.findIndex((memo) => memo.id === id) ;
  if(targetMemoIndex === -1){
    return state
    }
  
  state[targetMemoIndex].favorite = favorite;
  updateStorage(state);
  return state;
  }

// Sliceを生成する
const slice = createSlice({
  name: "memoList",
  initialState,
  reducers: {
    addMemo:add,
    
    deleteMemo:remove,
    // etc...

    favoriteMemo:favorite
  }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const {addMemo, deleteMemo, favoriteMemo} = slice.actions;