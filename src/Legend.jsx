function Legend({chapter, setChapter}) {
    const legendInfo = [{
        'number': 1,
        'step': "STEP 1",
        'title': "YOUR INFO"
    },{
        'number': 2,
        'step': "STEP 2",
        'title': "SELECT PLAN"
    },{
        'number': 3,
        'step': "STEP 3",
        'title': "ADD-ONS"
    },{
        'number': 4,
        'step': "STEP 4",
        'title': "SUMMARY"
    }, 
    ]

    return (
        <div className="bg-legend-desktop w-60 p-10 text-sm text-white">
            {legendInfo.map((chapters)=>{
                    const selected = () => {                     
                        if (chapter === chapters.number) {
                            return "bg-lightBlue border-0 text-black"
                        } else {return ''}
                    }
                    function changeChapter() {
                        setChapter(chapters.number)
                    }
                return <div key={chapters.number} onClick={(e) => changeChapter(e)} className="flex items-center mb-10 cursor-pointer">
                    <div className={`rounded-full mr-3 border flex items-center justify-center ${selected()}`} style={{height: "40px", width: "40px"}}>{chapters.number}</div>
                    <div>
                    <p className="font-extralight text-lightGray">{chapters.step}</p>
                    <p className="font-semibold">{chapters.title}</p>
                </div>
                </div>
            })}
       
        </div>
    )
}


export default Legend