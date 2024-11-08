import { useState } from 'react'
import './App.css'
import Legend from './Legend'
import Navigator from './Navigator'
import Switcher from './Switcher'

function App() {
const [chapter, setChapter] = useState(1);
const [monthly, setMonthly] = useState(false);
const [plan, setPlan] = useState("Arcade");
const [service, setService] = useState(false);
const [storage, setStorage] = useState(false);
const [profile, setProfile] = useState(false);
const [success, setSuccess] = useState(false);
  return (
    <>
    <div className='bg-white max-h-[650px] p-5 rounded-xl flex w-[900px]'>
      <Legend chapter={chapter} setChapter={setChapter} setSuccess={setSuccess}/>
      <div className='flex flex-col justify-between px-20 py-10 w-full max-w-[590px]'>
        <div className='flex flex-col'>

        <Switcher service={service} success={success} setService={setService} storage={storage} setStorage={setStorage} profile={profile} setProfile={setProfile} chapter={chapter} monthly={monthly} setMonthly={setMonthly} plan={plan} setPlan={setPlan} />
        </div>
        { !success ? <Navigator chapter={chapter} setChapter={setChapter} setSuccess={setSuccess} /> : ''}
      </div>
    </div>
    </>
  )
}

export default App
