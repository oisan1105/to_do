import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as rawUseSelector, } from "react-redux";

// それぞれ slice.reducer を default export している前提
import MemoListReducer from "./memoList";


const reducer = combineReducers({
 memoList :MemoListReducer,
});

const store = configureStore({ reducer });

export default store;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type RootState = ReturnType<typeof store.getState>;