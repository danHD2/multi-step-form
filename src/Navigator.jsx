function Navigator({everything, setEverything}) {

    function increment() {
        
        setEverything({
            ...everything,
            chapter: everything.chapter + 1
            
        })
        
    }

    function decrement() {
        if (everything.chapter > 1) {
            setEverything({
                ...everything,
                chapter: everything.chapter - 1
            })
            
        }

    }
    return (
        <div className="flex justify-between w-full select-none">
            <button onClick={() => decrement()} className={`text-coolGray font-semibold ${ everything.chapter === 1 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>Go Back</button>
            {everything.chapter !== 4 ? <button onClick={() => increment()} className="bg-marineBlue rounded-lg font-semibold text-white px-6 py-3">Next Step</button>
 : <button onClick={() => setEverything({
    ...everything,
    success: true
 })} className="bg-marineBlue rounded-lg font-semibold text-white px-6 py-3">Confirm</button>}
        </div>
    )
}

export default Navigator