

function StepThree({monthly, service, setService, storage, setStorage, profile, setProfile}) {
    const addOnData = [
        {
            title: "Online service",
            desc: "Access to multiplayer games",
            monthlyPrice: "+$1/mo",
            yearlyPrice: "+$10/yr",
            id: 1,
            state: service,
            setState: setService
        },{
            title: "Larger storage",
            desc: "Extra 1TB of cloud save",
            monthlyPrice: "+$2/mo",
            yearlyPrice: "+$20/yr",
            id: 2,
            state: storage,
            setState: setStorage
        },{
            title: "Customizable profile",
            desc: "Custom theme on your profile",
            monthlyPrice: "+$2/mo",
            yearlyPrice: "+$20/yr",
            id: 3,
            state: profile,
            setState: setProfile
        },
        
    ]    
    return (
        <div className="flex flex-col mb-10">
        <h1 className="text-2xl font-bold text-marineBlue">Pick add-ons</h1>
        <p className="text-sm text-coolGray pt-2">Add-ons help enchance your gaming experience.</p>
        <div className="mt-10">
        {addOnData.map((item) => {
            return (
                <div key={item.id} onClick={(e)=>{item.setState(!item.state)}} className={`flex border items-center select-none cursor-pointer justify-between flex-row mb-4 rounded-lg px-5 py-4 ${item.state ? "border-purplishBlue bg-alabaster" : "border-coolGray"}`}>
                    <div className="flex">
                        <input type="checkbox" checked={item.state} readOnly className="mr-5 w-4 rounded-lg cursor-pointer accent-purplishBlue"/>
                        <div className="flex flex-col">
                            <h2 className='text-marineBlue font-semibold'>{item.title}</h2>
                            <p className="text-sm text-coolGray">{item.desc}</p>
                        </div>
                    </div>
                    {!monthly ? <p className="text-purplishBlue">{item.monthlyPrice}</p> : <p className="text-purplishBlue">{item.yearlyPrice}</p>}
                </div>
            )
        })}
        </div>
    </div>
    )
}

export default StepThree