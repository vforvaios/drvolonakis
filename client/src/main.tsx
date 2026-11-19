// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import "./global.scss";

import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import store from "./store";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";

const persistor = persistStore(store);

// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState === "visible") {
//     console.log("APP resumed");
//     window.location.reload();
//   }
// });

createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </HelmetProvider>
    </PersistGate>
  </Provider>,
  // </StrictMode>
);
