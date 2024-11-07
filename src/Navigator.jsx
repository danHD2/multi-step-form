function Navigator({chapter, setChapter}) {

    function increment() {
        setChapter(prev => prev + 1)
    }

    function decrement() {
        if (chapter > 1) {
            setChapter(prev => prev- 1)
        }
    }
    return (
        <div className="flex justify-between w-full select-none">
            <button onClick={() => decrement()} className={`text-coolGray font-semibold ${ chapter === 1 ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>Go Back</button>
            <button onClick={() => increment()} className="bg-marineBlue rounded-lg font-semibold text-white px-6 py-3">Next Step</button>
        </div>
    )
}

export default Navigator