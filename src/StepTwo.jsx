import arcade from "../public/icon-arcade.svg";
import advanced from "../public/icon-advanced.svg";
import pro from "../public/icon-pro.svg";

const planData = [
  {
    img: arcade,
    title: "Arcade",
    yearPrice: "$90/yr",
    monthPrice: "$9/mo",
    bonus: "2 months free",
    id: 1,
  },
  {
    img: advanced,
    title: "Advanced",
    yearPrice: "$120/yr",
    monthPrice: "$12/mo",
    bonus: "2 months free",
    id: 2,
  },
  {
    img: pro,
    title: "Pro",
    yearPrice: "$150/yr",
    monthPrice: "$15/mo",
    bonus: "2 months free",
    id: 3,
  },
];

function StepTwo({ everything, setEverything }) {
  return (
    <div className="flex flex-col md:mb-10">
      <h1 className="text-2xl font-bold text-marineBlue">Select your plan</h1>
      <p className="text-md text-coolGray pt-2">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col md:flex-row justify-between mt-5 md:my-10">
        {planData.map((option) => {
          return (
            <div
              onClick={(e) => {
                setEverything({ ...everything, plan: option.title });
              }}
              className={`md:h-44 select-none md:w-36 cursor-pointer flex md:flex-col mb-4 md:mb-0 p-5 md:mr-4 last:mr-0 md:justify-between border border-lightGray hover:border-purplishBlue transition-all rounded-lg ${
                everything.plan === option.title
                  ? "border border-purplishBlue bg-alabaster"
                  : ""
              }`}
              key={option.id}
            >
              <img
                className="w-10 mr-3 md:mr-0"
                src={option.img}
                alt={option.title}
              ></img>
              <div>
                <h2 className="text-marineBlue font-semibold">
                  {option.title}
                </h2>
                <p className="text-sm text-coolGray md:py-1">
                  {!everything.monthly ? option.monthPrice : option.yearPrice}
                </p>
                {everything.monthly ? (
                  <p className="text-xs text-marineBlue font-bold pt-1 md:pt-0">
                    {option.bonus}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-alabaster flex justify-center">
        <div>
          <label className="inline-flex p-2.5 items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={everything.monthly}
              onChange={() => {
                setEverything({ ...everything, monthly: !everything.monthly });
              }}
              className="sr-only peer"
            />
            <span
              className={`mr-5 text-sm ${
                !everything.monthly
                  ? "text-marineBlue font-bold"
                  : "text-coolGray"
              }`}
            >
              Monthly
            </span>
            <div className="relative w-11 h-6 bg-marineBlue peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[4px] after:start-[6px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            <span
              className={`ms-5 text-sm ${
                everything.monthly
                  ? "text-marineBlue font-bold"
                  : "text-coolGray"
              }`}
            >
              Yearly
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
