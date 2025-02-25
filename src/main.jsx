import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Provider'ı import edin
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store"; // Redux store'unuzu import edin
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    {/* Provider ile sar */}
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </BrowserRouter>
  </Provider>
);
