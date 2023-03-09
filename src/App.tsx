import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputField from './components/InputField'

const App: React.FC=()=> {
  const [todo,setTodo]=useState<string>('');
  return (
    <div className="App">
      <span className='heading'>Teskify</span>
      <div>
        <InputField/>
      </div>
    </div>
  )
}

export default App
