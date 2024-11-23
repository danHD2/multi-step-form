function Storage({ everything }) {
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
