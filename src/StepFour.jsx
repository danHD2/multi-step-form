import StepFive from "./StepFive";

const monthlyPrices = {
  arcade: 9,
  advanced: 12,
  pro: 15,
  service: 1,
  storage: 2,
  profile: 2,
};

const yearlyPrices = {
  arcade: 90,
  advanced: 120,
  pro: 150,
  service: 10,
  storage: 20,
  profile: 20,
};

let total = 0;

function identifyPlan(everything) {
  if (everything.plan === "Arcade" && everything.monthly === false) {
    total = +monthlyPrices.arcade;
    return `${monthlyPrices.arcade}/mo`;
  } else if (everything.plan === "Arcade" && everything.monthly === true) {
    total = +yearlyPrices.arcade;
    return `${yearlyPrices.arcade}/yr`;
  } else if (everything.plan === "Advanced" && everything.monthly === true) {
    total = +yearlyPrices.advanced;
    return `${yearlyPrices.advanced}/yr`;
  } else if (everything.plan === "Advanced" && everything.monthly === false) {
    total = +monthlyPrices.advanced;
    return `${monthlyPrices.advanced}/mo`;
  } else if (everything.plan === "Pro" && everything.monthly === true) {
    total = +yearlyPrices.pro;
    return `${yearlyPrices.pro}/yr`;
  } else if (everything.plan === "Pro" && everything.monthly === false) {
    total = +monthlyPrices.pro;
    return `${monthlyPrices.pro}/mo`;
  }
}

function separator(everything) {
  if (everything.service || everything.storage || everything.profile) {
    return <div className="border-lightGray border my-5"></div>;
  }
}

function service(everything) {
  if (everything.service) {
    {
      everything.monthly
        ? (total += yearlyPrices.service)
        : (total += monthlyPrices.service);
    }
    return (
      <div className="mb-3 flex justify-between">
        <p className="text-coolGray">Online service</p>
        <p className="text-marineBlue">{`${
          everything.monthly
            ? `+$${yearlyPrices.service}/yr`
            : `+$${monthlyPrices.service}/mo`
        }`}</p>
      </div>
    );
  }
}

function storage(everything) {
  if (everything.storage) {
    {
      everything.monthly
        ? (total += yearlyPrices.storage)
        : (total += monthlyPrices.storage);
    }
    return (
      <div className="mb-3 flex justify-between">
        <p className="text-coolGray">Larger storage</p>
        <p className="text-marineBlue">{`${
          everything.monthly
            ? `+$${yearlyPrices.storage}/yr`
            : `+$${monthlyPrices.storage}/mo`
        }`}</p>
      </div>
    );
  }
}

function profile(everything) {
  if (everything.profile) {
    {
      everything.monthly
        ? (total += yearlyPrices.profile)
        : (total += monthlyPrices.profile);
    }
    return (
      <div className="mb-3 flex justify-between">
        <p className="text-coolGray">Customizable profile</p>
        <p className="text-marineBlue">{`${
          everything.monthly
            ? `+$${yearlyPrices.profile}/yr`
            : `+$${monthlyPrices.profile}/mo`
        }`}</p>
      </div>
    );
  }
}

function StepFour({ everything, setEverything }) {
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
            {separator(everything)}
            {service(everything)}
            {storage(everything)}
            {profile(everything)}
          </div>
          <div className="pt-5 pb-1 px-5 md:pt-0 md:pb-0 md:p-5 flex justify-between">
            <p className="text-coolGray">Total (per month)</p>
            <p className="text-lg font-bold text-purplishBlue">{`$${total}/${
              everything.monthly ? "yr" : "mo"
            }`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepFour;
