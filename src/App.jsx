import { useState } from 'react'
import './App.css'
import Legend from './Legend'
import StepOne from './StepOne'

function App() {
const [chapter, setChapter] = useState(1);

  return (
    <>
    <div className='bg-white p-5 rounded-xl flex'>
    <Legend chapter={chapter} setChapter={setChapter}/>
    <StepOne />
    </div>
    </>
  )
}

export default App
