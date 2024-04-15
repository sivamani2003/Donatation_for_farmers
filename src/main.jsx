import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: "Demo UI React App",
        },
      }}
    >
      <App />
    </MetaMaskUIProvider>
  </React.StrictMode>
);
