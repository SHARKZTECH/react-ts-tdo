import React,{useState} from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Todo } from './Todo';
import TodoItem from './TodoItem';

type Props={
    todos:Array<Todo>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {

  const ondragend=(result)=>{
    console.log(result);

    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    // setTodos(items);

  }
  return (
    <div>
      <DragDropContext onDragEnd={ondragend}>
        <Droppable droppableId={todos.toString()}>
          {(provided=>(
             <p {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map(todo=>(
                <Draggable draggableId={todo.id.toString()} index={todo.id}>
                  {provided=>(
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                       <TodoItem todo={todo} todos={todos} setTodos={setTodos} />      
                    </div>
                  )}
                </Draggable>
            ))}
            {provided.placeholder}
            </p>
          ))}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TodoList