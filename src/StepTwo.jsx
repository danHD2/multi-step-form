import arcade from '../public/icon-arcade.svg'
import advanced from '../public/icon-advanced.svg'
import pro from '../public/icon-pro.svg'
import { useState } from 'react'

const planData = [
    {   img: arcade,
        title: 'Arcade',
        yearPrice: '$90/yr',
        monthPrice: '$9/mo',
        bonus: '2 months free'
    },
    {   
        img: advanced,
        title: 'Advanced',
        yearPrice: '$120/yr',
        monthPrice: '$12/mo',
        bonus: '2 months free'
    },
    {
        img: pro,
        title: 'Pro',
        yearPrice: '$150/yr',
        monthPrice: '$15/mo',
        bonus: '2 months free'
    },
]

function StepTwo() {

   const [monthly, setMonthly] = useState(false);

    return (
        <div className="flex flex-col mb-10">
            <h1 className="text-2xl font-bold text-marineBlue">Select your plan</h1>
            <p className="text-sm text-coolGray pt-2">You have the option of monthly or yearly billing.</p>
            <div className="flex justify-between my-10">
            {planData.map((option) => {
                return (
                    <div className='h-52 w-36 flex flex-col p-5 mr-5 last:mr-0 justify-between border border-lightGray rounded-lg' key={option.index}>
                        <img className='w-10' src={option.img} alt={option.title}></img>
                        <div>
                            <h2 className='text-marineBlue font-semibold'>{option.title}</h2>
                            <p className='text-sm text-coolGray py-1'>{monthly ? option.monthPrice : option.yearPrice}</p>
                            {!monthly ? <p className='text-xs text-marineBlue'>{option.bonus}</p> : ''}
                        </div>
                    </div>
                )

            })}
            </div>
            <div className="bg-alabaster flex justify-center">

               <div>
               <label className="inline-flex items-center cursor-pointer select-none">
                <input type="checkbox" value="" className="sr-only peer"/>
                <span className="mr-5 text-sm font-medium text-gray-900">Monthly</span>
                <div className="relative w-11 h-6 bg-marineBlue peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[6px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
                <span className="ms-5 text-sm font-medium text-gray-900">Yearly</span>
                </label>
               </div>

            </div>
        </div>
    )
}

export default StepTwo