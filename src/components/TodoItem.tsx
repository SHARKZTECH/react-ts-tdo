import React,{useState} from 'react'
import {MdCheck, MdDelete, MdEdit} from "react-icons/md"
import { Todo } from './Todo';

type Props={
    todo:Todo
}

const TodoItem:React.FC<Props> = ({todo}) => {
    const [edit,setEdit]=useState<boolean>(false);
    const [text,setText]=useState<string>(todo.todo);

    const handleEdit=(id:number)=>{
        setEdit(!edit);
        if(edit){
            alert(text);
        }
    }
    const handleDelete=(id:number)=>{
        alert(id)
    }
    const handleComplte=(id:number)=>{
        alert(id);
    }
  return (
    <div className='todo_item_container'>
    {edit? (
        <input value={text} onChange={(e)=>setText(e.target.value)} />
    ):(
        <p style={{color:'whitesmoke'}}>{todo.todo}</p>
    )}
    <div>
    <MdEdit size={30} onClick={()=>handleEdit(todo.id)}/>
    <MdDelete size={30} color="red" onClick={()=>handleDelete(todo.id)}/>
    <MdCheck size={30} onClick={()=>handleComplte(todo.id)} />
    </div>
</div>
  )
}

export default TodoItem