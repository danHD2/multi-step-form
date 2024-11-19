const legendInfo = [
  {
    number: 1,
    step: "STEP 1",
    title: "YOUR INFO",
  },
  {
    number: 2,
    step: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    number: 3,
    step: "STEP 3",
    title: "ADD-ONS",
  },
  {
    number: 4,
    step: "STEP 4",
    title: "SUMMARY",
  },
];

function Legend({ everything, setEverything }) {
  return (
    <div className="bg-legend-mobile bg-cover flex justify-center md:justify-normal md:flex-col md:bg-legend-desktop select-none md:h-[566px] md:w-[17rem] w-full p-10 text-sm text-white md:rounded-lg">
      {legendInfo.map((chapters) => {
        function changeChapter() {
          setEverything({
            ...everything,
            chapter: chapters.number,
            success: false,
          });
        }
        return (
          <div
            key={chapters.number}
            onClick={(e) => changeChapter(e)}
            className="flex items-center mb-10 cursor-pointer"
          >
            <div
              className={`rounded-full mx-2 md:mx-0 md:mr-3 border flex items-center font-bold justify-center ${
                everything.chapter === chapters.number
                  ? "bg-lightBlue border-0 text-marineBlue"
                  : ""
              }`}
              style={{ height: "40px", width: "40px" }}
            >
              {chapters.number}
            </div>
            <div className="hidden md:block">
              <p className="font-extralight text-lightGray">{chapters.step}</p>
              <p className="font-semibold">{chapters.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Legend;
