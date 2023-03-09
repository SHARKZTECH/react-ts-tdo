import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputField from './components/InputField'

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

const App: React.FC=()=> {
  const [todo,setTodo]=useState<string>('');
  const [todos,setTodos]=useState<Array<Todo>>([]);


  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault;
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
    setTodo("");
  }
  return (
    <div className="App">
      <span className='heading'>Teskify</span>
      <div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      </div>
    </div>
  )
}

export default App
