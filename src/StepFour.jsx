import StepFive from "./StepFive";
import Separator from "./Separator";
import Service from "./Service";
import Storage from "./Storage";
import Profile from "./Profile";

function StepFour({ everything, setEverything }) {
  function identifyPlan(everything) {
    if (everything.plan === "Arcade") {
      return everything.monthly
        ? everything.yearlyPrices.arcade
        : everything.monthlyPrices.arcade;
    } else if (everything.plan === "Advanced") {
      return everything.monthly
        ? everything.yearlyPrices.advanced
        : everything.monthlyPrices.advanced;
    } else if (everything.plan === "Pro") {
      return everything.monthly
        ? everything.yearlyPrices.pro
        : everything.monthlyPrices.pro;
    }
  }

  return (
    <div>
      {everything.success ? (
        <StepFive />
      ) : (
        <div className="flex flex-col md:mb-10">
          <h1 className="text-2xl font-bold text-marineBlue">Finishing up</h1>
          <p className="text-md text-coolGray pt-2">
            Double-check everything looks OK before confirming.
          </p>
          <div className="bg-alabaster rounded-lg mt-5 md:mt-8 p-5">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold text-marineBlue">
                  {everything.plan}{" "}
                  {everything.monthly ? "(Yearly)" : "(Monthly)"}
                </h2>
                <p
                  onClick={() => {
                    setEverything({ ...everything, chapter: 2 });
                  }}
                  className="text-coolGray underline hover:text-purplishBlue transition-all cursor-pointer"
                >
                  Change
                </p>
              </div>
              <p className="font-bold text-marineBlue">{`$${identifyPlan(
                everything
              )}`}</p>
            </div>
            <Separator everything={everything} />
            <Service everything={everything} setEverything={setEverything} />
            <Storage everything={everything} setEverything={setEverything} />
            <Profile everything={everything} setEverything={setEverything} />
          </div>
          <div className="pt-5 pb-1 px-5 flex justify-between">
            <p className="text-coolGray">Total (per month)</p>
            <p className="text-lg font-bold text-purplishBlue">{`$${
              everything.total
            }/${everything.monthly ? "yr" : "mo"}`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepFour;
