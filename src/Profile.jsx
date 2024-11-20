function Profile({ everything }) {
  if (everything.profile) {
    {
      everything.monthly
        ? (everything.total += everything.yearlyPrices.profile)
        : (everything.total += everything.monthlyPrices.profile);
    }
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
}

export default Profile;
