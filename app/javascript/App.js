import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./Redux/configureStore";
import Message from "./components/Message";


function App() {
  return (
    <Provider store={store}>
     <Router>
        <Message />
      </Router>
    </Provider>
  );
}

export default App;