import { useEffect } from "react";

function Profile({ everything, setEverything }) {
  useEffect(() => {
    const profileTotalUpdate = everything.monthly
      ? everything.yearlyPrices.profile
      : everything.monthlyPrices.profile;

    if (everything.profile) {
      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total + profileTotalUpdate,
        profileAdded: true,
      }));
      console.log("profile added");
      console.log(everything.profileAdded);
    } else if (!everything.profile && everything.profileAdded) {
      setEverything((prevState) => ({
        ...prevState,
        total: prevState.total - profileTotalUpdate,
        profileAdded: false,
      }));
      console.log("profile removed");
      console.log(everything.profileAdded);
    }
  }, [setEverything]);

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
