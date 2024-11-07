import { useState } from 'react'
import './App.css'
import Legend from './Legend'
import Navigator from './Navigator'
import Switcher from './Switcher'

function App() {
const [chapter, setChapter] = useState(1);

  return (
    <>
    <div className='bg-white h-[600px] p-5 rounded-xl flex'>
      <Legend chapter={chapter} setChapter={setChapter}/>
      <div className='flex flex-col justify-between w-full max-w-96'>
        <Switcher chapter={chapter} />
        <Navigator chapter={chapter} setChapter={setChapter} />
      </div>
    </div>
    </>
  )
}

export default App
