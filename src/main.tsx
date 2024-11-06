import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MultiThemeProvider } from "@federicorz98/multi";
import App from "./App.tsx";
import "@federicorz98/multi/dist/index.css";

const IEBColorSchema = {
  huePrimary: 261,
  hueError: 352,
  hueSuccess: 114,
  hueWarning: 45,
  saturationMain: 100,
  lightnessMain: 44,
  lightnessDark: 37,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MultiThemeProvider colorSchema={IEBColorSchema}>
      <App />
    </MultiThemeProvider>
  </StrictMode>
);
