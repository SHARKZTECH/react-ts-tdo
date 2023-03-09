import React from 'react'

interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAdd:(e:React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({todo,setTodo,handleAdd}) => {

  return (
    <div className='input_container'>
        <form>
            <input
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
             type={'text'} placeholder="Enter task" />
            <button
            onClick={(e)=>handleAdd(e)}>Go</button>
        </form>
    </div>
  )
}

export default InputField