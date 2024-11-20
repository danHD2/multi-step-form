function StepOne({ everything, setEverything }) {
  const { name, email, phone, errors } = everything;

  return (
    <div className="flex flex-col md:mb-2">
      <h1 className="text-2xl font-bold text-marineBlue">Personal info</h1>
      <p className="text-md text-coolGray pt-2">
        Please provide your name, email address, and phone number.
      </p>
      <form className="flex flex-col mt-8">
        <div className="flex justify-between">
          <label htmlFor="name" className="text-marineBlue pb-2">
            Name
          </label>
          <p
            className={`text-strawberryRed font-bold ${
              errors.name ? "visible" : "invisible"
            }`}
          >
            This field is required
          </p>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setEverything({ ...everything, name: e.target.value });
          }}
          onBlur={() =>
            setEverything((prev) => ({
              ...prev,
              touched: { ...prev.touched, name: true },
            }))
          }
          className={`border-lightGray focus-visible:outline-none focus:border-purplishBlue focus:border-2 font-semibold rounded-lg text-marineBlue p-3 mb-5 border ${
            errors.name ? "border-strawberryRed" : ""
          }`}
          value={everything.name}
          placeholder="e.g. Stephen King"
          id="name"
        />
        <div className="flex justify-between">
          <label htmlFor="email" className="text-marineBlue pb-2">
            Email Address
          </label>
          <p
            className={`text-strawberryRed font-bold ${
              errors.email ? "visible" : "invisible"
            }`}
          >
            {everything.email.trim() === ""
              ? "This field is required"
              : "Invalid email format"}
          </p>
        </div>
        <input
          type="text"
          onChange={(e) => {
            const value = e.target.value;
            setEverything((prev) => ({
              ...prev,
              email: value,
              errors: { ...prev.errors, email: false }, // Clear email error
            }));
          }}
          onBlur={() =>
            setEverything((prev) => ({
              ...prev,
              touched: { ...prev.touched, email: true },
            }))
          }
          className={`border-lightGray focus-visible:outline-none focus:border-purplishBlue focus:border-2 font-semibold rounded-lg text-marineBlue p-3 mb-5 border ${
            errors.email ? "border-strawberryRed" : ""
          }`}
          value={everything.email}
          placeholder="e.g. stephenking@lorem.com"
          id="email"
        />
        <div className="flex justify-between">
          <label htmlFor="phone" className="text-marineBlue pb-2">
            Phone Number
          </label>
          <p
            className={`text-strawberryRed font-bold ${
              errors.phone ? "visible" : "invisible"
            }`}
          >
            This field is required
          </p>
        </div>
        <input
          type="text"
          onChange={(e) => {
            setEverything({ ...everything, phone: e.target.value });
          }}
          onBlur={() =>
            setEverything((prev) => ({
              ...prev,
              touched: { ...prev.touched, phone: true },
            }))
          }
          className={`border-lightGray focus-visible:outline-none focus:border-purplishBlue focus:border-2 font-semibold rounded-lg text-marineBlue p-3 mb-5 border ${
            errors.phone ? "border-strawberryRed" : ""
          }`}
          value={everything.phone}
          placeholder="e.g. +1 234 567 890"
          id="phone"
        />
      </form>
    </div>
  );
}

export default StepOne;
