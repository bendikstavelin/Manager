import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCuUByIRWv_XOD-rpXpjDoTI-m77fto4ZU',
      authDomain: 'manager-f1dca.firebaseapp.com',
      databaseURL: 'https://manager-f1dca.firebaseio.com',
      projectId: 'manager-f1dca',
      storageBucket: 'manager-f1dca.appspot.com',
      messagingSenderId: '616643648784'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}


export default App;
