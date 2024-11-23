import { useEffect } from "react";

function Storage({ everything, setEverything }) {
  useEffect(() => {
    const storageTotalUpdate = everything.monthly
      ? everything.yearlyPrices.storage
      : everything.monthlyPrices.storage;

    if (everything.storage) {
      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total + storageTotalUpdate,
        storageAdded: true,
      }));
      console.log("storage added");
      console.log(everything.storageAdded);
    } else if (!everything.storage && everything.storageAdded) {
      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total - storageTotalUpdate,
        storageAdded: false,
      }));
      console.log("storage removed");
      console.log(everything.storageAdded);
    }
  }, [setEverything]);

  if (!everything.storage) return null;

  return (
    <div className="mb-3 flex justify-between">
      <p className="text-coolGray">Larger storage</p>
      <p className="text-marineBlue">{`${
        everything.monthly
          ? `+$${everything.yearlyPrices.storage}/yr`
          : `+$${everything.monthlyPrices.storage}/mo`
      }`}</p>
    </div>
  );
}

export default Storage;
