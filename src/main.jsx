import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ImageContainerProvider } from "./contexts/ImageContainerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageContainerProvider>
      <App />
    </ImageContainerProvider>
  </StrictMode>
);
