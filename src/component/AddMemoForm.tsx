import React from 'react';
import { useDispatch } from 'react-redux';
import { addMemo, deleteMemo } from '../stores/memoList';
import { MemoType } from '../type/Memo';
import { useForm } from "react-hook-form";
import { Category } from '../type/Category';

type FormData = {
  text: string;
  category: Category;
  
}

function AddMemoForm (props:{Close:() => void}) {
  const CategoryList:Category[] = ['job','cooking', 'memo', 'investment', 'other' ]
  const dispatch = useDispatch();
const Close = props.Close
const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
const Add = (data: FormData) =>{
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
    "text":data.text,
    "category":data.category,
    "favorite":true,
    "id": id
  }
  console.log('addbutton')
  dispatch(addMemo(memo))
  Close();
  console.log(data);
}
  return (
    <form onSubmit={handleSubmit(Add)}>
      <textarea {...register("text", { required: true })} />
      <select {...register('category',{ required: true})}>
        {CategoryList.map((category,i) => <option key={i} value={category}>{category}</option>)}
      </select>
      <button onClick={Close}>
        close
      </button>
      <button>
        Add
      </button>
    </form>
    );
}

export default AddMemoForm;
