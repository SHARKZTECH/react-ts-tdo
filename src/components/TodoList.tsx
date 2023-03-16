import React,{useState} from 'react'
import { DragDropContext, Draggable, Droppable,DropResult } from 'react-beautiful-dnd';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props={
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    CompletedTodos:Array<Todo>,
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos,CompletedTodos,setCompletedTodos}) => {


  return (
    <div className='todolist_container'>
        <Droppable droppableId="TodoList">
          {(provided=>(
             <div 
             className='active'
             {...provided.droppableProps} ref={provided.innerRef}>
              <span className='heading'>Active Task</span>
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
        <Droppable droppableId="CompletedTodos">
          {(provided=>(
             <div 
             className='complete'
             {...provided.droppableProps} ref={provided.innerRef}>
            <span className='heading'>Completed Task</span>
            {CompletedTodos.map((todo,idx)=>(
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