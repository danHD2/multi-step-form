import ty from "./icon-thank-you.svg";

function StepFive() {
  return (
    <div className="flex flex-col items-center text-center my-16 md:mt-36">
      <img src={ty} alt="Success" className="w-14 mb-5" />
      <h1 className="text-2xl font-bold text-marineBlue">Thank you!</h1>
      <p className="text-sm text-coolGray pt-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loregaming.com.
      </p>
    </div>
  );
}

export default StepFive;
