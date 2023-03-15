import { useState } from 'react'
import { DragDropContext, Draggable, Droppable,DropResult } from 'react-beautiful-dnd';

import reactLogo from './assets/react.svg'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList';
import { Todo } from './components/Todo';




const App: React.FC=()=> {
  const [todo,setTodo]=useState<string>('');
  const [todos,setTodos]=useState<Array<Todo>>([]);


  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo("");
    }
  }

  // console.log(todos)
  const ondragend=(result:DropResult)=>{
    const {destination,source}=result;

    if (!destination) return;

    let items=todos;

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
    // setTodos(items);

    // console.log(items)
    setTodos(items);

  }
  return (
    <div className="App">
      <DragDropContext onDragEnd={ondragend}>
      <span className='heading'>Teskify</span>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
      </DragDropContext>
    </div>
  )
}

export default App
