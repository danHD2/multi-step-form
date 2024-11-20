import { useEffect, useState } from "react";

function Service({ everything, setEverything }) {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (everything.service && !updated) {
      const serviceTotalUpdate = everything.monthly
        ? everything.yearlyPrices.service
        : everything.monthlyPrices.service;

      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total + serviceTotalUpdate,
      }));

      setUpdated(true);
    }
  }, [everything.service, everything.monthly, updated, setEverything]);

  if (!everything.service) return null;

  return (
    <div className="mb-3 flex justify-between">
      <p className="text-coolGray">Online service</p>
      <p className="text-marineBlue">{`${
        everything.monthly
          ? `+$${everything.yearlyPrices.service}/yr`
          : `+$${everything.monthlyPrices.service}/mo`
      }`}</p>
    </div>
  );
}

export default Service;
