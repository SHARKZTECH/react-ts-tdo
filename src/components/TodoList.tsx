import React,{useState} from 'react'
import { DragDropContext, Draggable, Droppable,DropResult } from 'react-beautiful-dnd';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props={
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {


  return (
    <div>
        <Droppable droppableId={todos?.toString()}>
          {(provided=>(
             <div {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo,idx)=>(
                <Draggable draggableId={todo?.id.toString()} index={idx} key={idx}>
                  {provided=>(
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                       <TodoItem todo={todo} todos={todos} setTodos={setTodos} />      
                    </div>
                  )}
                </Draggable>
            ))}
            {provided.placeholder}
            </div>
          ))}
        </Droppable>
    </div>
  )
}

export default TodoList