import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";
import 'core-js'
import { Provider } from 'react-redux'
import store from "./store"
//import { ToastContainer} from 'react-toastify';
//import './react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <Suspense fallback={<Loader />}>
 <Provider store={store}>  

  <BrowserRouter>
     <App />
    </BrowserRouter>
    </Provider>
  </Suspense>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
