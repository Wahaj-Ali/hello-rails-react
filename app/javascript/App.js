import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Redux/configureStore";
import Greeting from "./components/Greeting";



function App() {
  return (
    <Provider store={store}>
     <Router>
        <Greeting />
      </Router>
    </Provider>
  );
}

export default App;