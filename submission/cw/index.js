import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import About from "./About";
import Clock from "./Clock";
import Home from "./Home";
import NotFound from "./NotFound";
import Fetch from "./Fetch";
import ProtectedRoute from "./ProtectedRoute";
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
  {/* Public pages */}
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Fetch />} />

    {/* Protected pages */}
    <Route
      path="about"
      element={
        <ProtectedRoute>
          <About />
        </ProtectedRoute>
      }
    />
    <Route
      path="clock"
      element={
        <ProtectedRoute>
          <Clock />
        </ProtectedRoute>
      }
    />

    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
