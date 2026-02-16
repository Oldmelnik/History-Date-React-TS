import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";

const roots = document.querySelectorAll(".historyDates");

roots!.forEach((root) => {
  createRoot(root!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
