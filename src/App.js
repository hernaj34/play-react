import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './components/Todos/reducer';
import FileUploader from './components/Files/FileUploader';

let store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
          <FileUploader />
      </Provider>
    );
  }
}

export default App;

