import { useState } from 'react'
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

  console.log(todos)
  return (
    <div className="App">
      <span className='heading'>Teskify</span>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  )
}

export default App
