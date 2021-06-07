import React from 'react';
import { Provider } from "react-redux";
import MainApp from "./MainApp";
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App;
