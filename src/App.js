import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostsForm from './components/PostsForm'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'

const store = createStore(() => [],{}, applyMiddleware())

class App extends Component {
 
  render() {
    return (
      <Provider store = {store}>
        
      <div className="App">
       <PostsForm/>
       <hr/>
       <Posts/>
      </div>
      </Provider>
    );
  }
}

export default App;
