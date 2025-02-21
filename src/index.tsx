import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store  from "./Store/store"; // ✅ تأكد من المسار الصحيح
import App from "./App"; // ✅ تأكد من المسار الصحيح

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
