import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import store from "./store/redux.store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
