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
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);



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

    //Reorder
    // let items=todos;

    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(destination.index, 0, reorderedItem);

    // setTodos(items);
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
      ) {
        return;
      }


    let add;
    let active = todos;
    let complete=CompletedTodos;
    //source logic
    if(source.droppableId == "TodoList"){
      add=active[source.index];
      active.splice(source.index,1);
    }else{
      add=complete[source.index];
      complete.splice(source.index,1);
    }
    //Destination Logic
    if(destination.droppableId == "TodoList"){
     active.splice(destination.index,0,add);
    }else{
     complete.splice(destination.index,0,add);
    }

    setTodos(active);
    setCompletedTodos(complete);

  }
  return (
    <div className="App">
      <DragDropContext onDragEnd={ondragend}>
      <span className='heading'>Teskify</span>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} CompletedTodos={CompletedTodos} setCompletedTodos={setCompletedTodos} />
      </div>
      </DragDropContext>
    </div>
  )
}

export default App
