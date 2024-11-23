import { useEffect } from "react";

function Service({ everything, setEverything }) {
  useEffect(() => {
    const serviceTotalUpdate = everything.monthly
      ? everything.yearlyPrices.service
      : everything.monthlyPrices.service;

    if (everything.service) {
      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total + serviceTotalUpdate,
        serviceAdded: true,
      }));
      console.log("service added");
      console.log(everything.serviceAdded);
    } else if (!everything.service && everything.serviceAdded) {
      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total - serviceTotalUpdate,
        serviceAdded: false,
      }));
      console.log("service removed");
    }
  }, [setEverything]);

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
