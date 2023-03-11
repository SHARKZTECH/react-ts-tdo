import React,{useState} from 'react'
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props={todos:Array<Todo>}

const TodoList:React.FC<Props> = ({todos}) => {


  return (
    <div>
        {todos.map(todo=>(
            <TodoItem todo={todo}/>      
        ))}
    </div>
  )
}

export default TodoList