import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./shared/provider/Provider.tsx";
import AppRoutes from "./AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
