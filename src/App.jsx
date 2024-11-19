import { useState } from "react";
import "./App.css";
import Legend from "./Legend";
import Navigator from "./Navigator";
import Switcher from "./Switcher";

function App() {
  const [everything, setEverything] = useState({
    chapter: 1,
    name: "",
    email: "",
    phone: "",
    monthly: false,
    plan: "Arcade",
    service: false,
    storage: false,
    profile: false,
    success: false,
    errors: {
      name: false,
      email: false,
      phone: false,
    },
    touched: {
      name: false,
      email: false,
      phone: false,
    },
  });
  return (
    <>
      <div className="md:bg-white  max-h-screen w-full md:max-h-[650px] md:p-5 md:rounded-xl flex items-center flex-col md:flex-row md:w-[900px]">
        <Legend everything={everything} setEverything={setEverything} />
        <div className="flex flex-col rounded-lg relative bg-white md:top-0 -top-10 justify-between w-11/12 md:px-20 md:py-10 p-5 md:p-0 shadow-xl md:shadow-none md:w-full md:max-w-[590px]">
          <div className="flex flex-col">
            <Switcher everything={everything} setEverything={setEverything} />
          </div>
          {!everything.success ? (
            <Navigator everything={everything} setEverything={setEverything} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
