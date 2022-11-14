import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const dataPath = "/data.json";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App conf={{ dataPath }} />
  </StrictMode>
);
