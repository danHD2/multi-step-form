function Service({ everything }) {
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
