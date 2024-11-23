function Profile({ everything }) {
  if (!everything.profile) return null;

  return (
    <div className="mb-3 flex justify-between">
      <p className="text-coolGray">Customizable profile</p>
      <p className="text-marineBlue">{`${
        everything.monthly
          ? `+$${everything.yearlyPrices.profile}/yr`
          : `+$${everything.monthlyPrices.profile}/mo`
      }`}</p>
    </div>
  );
}

export default Profile;
