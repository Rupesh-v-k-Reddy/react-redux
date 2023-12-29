import React from "react";
import { Provider } from "react-redux";
import store from "./App/store";
import Todo from "./Components/Todo";
const App = () => {
  return (
    <Provider store={store}>
       <Todo /> 
    </Provider>
  );
};
export default App;