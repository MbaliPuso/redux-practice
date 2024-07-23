import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import ManualCounter from "./components/ManualCounter";

function App() {
  return (
    // registering our store in the App.js file
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetails />} />
          <Route path="/manual-counter" element={<ManualCounter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
