import { useState } from 'react'
import './App.css'
import Legend from './Legend'
import Navigator from './Navigator'
import Switcher from './Switcher'

function App() {
const [everything, setEverything] = useState({
  chapter: 1,
  name: '',
  email: '',
  phone: '',
  monthly: false,
  plan: "Arcade",
  service: false,
  storage: false,
  profile: false,
  success: false
})
  return (
    <>
    <div className='bg-white max-h-[650px] p-5 rounded-xl flex w-[900px]'>
      <Legend everything={everything} setEverything={setEverything}/>
      <div className='flex flex-col justify-between px-20 py-10 w-full max-w-[590px]'>
        <div className='flex flex-col'>

        <Switcher everything={everything} setEverything={setEverything} />
        </div>
        { !everything.success ? <Navigator everything={everything} setEverything={setEverything} /> : ''}
      </div>
    </div>
    </>
  )
}

export default App
