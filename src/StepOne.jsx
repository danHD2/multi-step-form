
function StepOne({everything, setEverything}) {
    return (
        <div className="flex flex-col mb-10">
            <h1 className="text-2xl font-bold text-marineBlue">Personal info</h1>
            <p className="text-sm text-coolGray pt-2">Please provide your name, email address, and phone number.</p>
            <form className="flex flex-col mt-8">
                <label htmlFor="name" className="text-marineBlue pb-2">Name</label>
                <input type="text" onChange={(e) => {setEverything({...everything, name: e.target.value})}} className="border-lightGray font-semibold rounded-lg text-marineBlue p-3 mb-5 border" value={everything.name} placeholder="e.g. Stephen King" id="name"/>
                <label htmlFor="email" className="text-marineBlue pb-2">Email Address</label>
                <input type="text" onChange={(e) => {setEverything({...everything, email: e.target.value})}} className="border-lightGray font-semibold rounded-lg text-marineBlue p-3 mb-5 border" value={everything.email} placeholder="e.g. stephenking@lorem.com" id="email" />
                <label htmlFor="phone" className="text-marineBlue pb-2">Phone Number</label>
                <input type="text" onChange={(e) => {setEverything({...everything, phone: e.target.value})}} className="border-lightGray font-semibold rounded-lg text-marineBlue p-3 mb-5 border" value={everything.phone} placeholder="e.g. +1 234 567 890" id="phone" />
            </form>
        </div>
    )
}

export default StepOne