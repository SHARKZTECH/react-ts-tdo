import React,{useState} from 'react'
import {MdCheck, MdDelete, MdEdit} from "react-icons/md"
import { Todo } from './Todo';

type Props={
   todo:Todo,
   todos:Array<Todo>,
   setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoItem:React.FC<Props> = ({todo,todos,setTodos}) => {
    const [edit,setEdit]=useState<boolean>(false);
    const [text,setText]=useState<string>(todo.todo);

    const handleEdit=(id:number)=>{
        setEdit(!edit);
        if(edit){
            setTodos([...todos.filter(t=>t.id !== id),{id,todo:text,isDone:todo.isDone}]);
        }
    }
    const handleDelete=(id:number)=>{
        setTodos(todos.filter(t=>t.id !== id));
    }
    const handleComplte=(id:number)=>{
        setTodos(todos.map(t=> t.id === id ? {...t,isDone:!t.isDone} : t));
    }
  return (
    <div className={todo.isDone ? 'todo_item_container comp' : 'todo_item_container'}>
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