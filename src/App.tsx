import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import PageContainer from "./pages/HomePage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageContainer />
      </div>
    </Provider>
  );
}

export default App;
