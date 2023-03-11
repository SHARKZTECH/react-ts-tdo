import React,{useState} from 'react'
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props={
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {

  return (
    <div>
        {todos.map(todo=>(
            <TodoItem todo={todo} todos={todos} setTodos={setTodos} />      
        ))}
    </div>
  )
}

export default TodoList