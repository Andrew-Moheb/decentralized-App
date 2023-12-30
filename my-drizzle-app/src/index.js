import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Drizzle, generateStore } from "@drizzle/store";
import Addition from "../src/build/contracts/Addition.json";

const options = { contracts: [Addition] };

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App drizzle={drizzle} />
  </React.StrictMode>
);
