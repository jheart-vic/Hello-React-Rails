import React from "react";
import Greeting from "./Greetings";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../Store/configStore";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes >
          <Route exact path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
