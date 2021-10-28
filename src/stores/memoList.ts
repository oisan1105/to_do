import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { memo } from "react";
import  { MemoType } from '../type/Memo'



// Stateの初期状態
const initialState:MemoType[] = [];

const add: CaseReducer<MemoType[], PayloadAction<MemoType>> = (state, action) => {
  console.log(state,action)
  return [...state,action.payload]
}

const remove: CaseReducer<MemoType[], PayloadAction<string>> = (state, action) => {
  console.log(state,action)
  const id = action.payload
  const result = state.filter(function( item ){
    console.log(item, id)
    return item.id !== id
      });
  return result;
}

const favorite: CaseReducer<MemoType[], PayloadAction<{id:string, favorite:boolean}>> = (state, action) => {
  const {id, favorite} = action.payload ;
  const targetMemoIndex = state.findIndex((memo) => memo.id === id) ;
  if(targetMemoIndex === -1){
    return state
    }
  
  state[targetMemoIndex].favorite = favorite;
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