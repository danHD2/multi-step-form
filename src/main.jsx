import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div className="bg-magnolia h-screen font-[Ubuntu] flex justify-center md:items-center">
        <App />
      </div>
    </>
  </StrictMode>
);
