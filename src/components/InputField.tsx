import React from 'react'

const InputField: React.FC = () => {
  return (
    <div className='input_container'>
        <form>
            <input type={'text'} placeholder="Enter task" />
            <button>Go</button>
        </form>
    </div>
  )
}

export default InputField