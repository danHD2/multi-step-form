function Navigator({ everything, setEverything }) {
  function validateInputs() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: !everything.name.trim(),
      email: !emailRegex.test(everything.email.trim()),
      phone: !everything.phone.trim(),
    };

    setEverything({
      ...everything,
      errors: newErrors,
    });

    return !Object.values(newErrors).some(Boolean);
  }

  function increment() {
    if (everything.chapter === 1) {
      // Validate inputs on the first step
      const isValid = validateInputs();

      if (isValid) {
        // Reset errors before navigating
        setEverything((prev) => ({
          ...prev,
          errors: { name: false, email: false, phone: false },
          chapter: prev.chapter + 1, // Change page
        }));
      }
    } else {
      // For other chapters, simply move forward
      setEverything((prev) => ({
        ...prev,
        chapter: prev.chapter + 1,
      }));
    }
  }

  function decrement() {
    if (everything.chapter > 1) {
      setEverything({
        ...everything,
        chapter: everything.chapter - 1,
      });
    }
  }
  return (
    <div className="flex justify-between w-full select-none">
      <button
        onClick={() => decrement()}
        className={`text-coolGray font-semibold hover:text-marineBlue transition-all ${
          everything.chapter === 1
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        Go Back
      </button>
      {everything.chapter !== 4 ? (
        <button
          onClick={() => increment()}
          className="bg-marineBlue hover:bg-opacity-90 transition-all rounded-lg font-semibold text-white px-6 py-3"
        >
          Next Step
        </button>
      ) : (
        <button
          onClick={() =>
            setEverything({
              ...everything,
              success: true,
            })
          }
          className="bg-marineBlue hover:bg-purplishBlue hover:opacity-70 transition-all rounded-lg font-semibold text-white px-6 py-3"
        >
          Confirm
        </button>
      )}
    </div>
  );
}

export default Navigator;
