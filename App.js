import React from 'react';


import {createStore,applyMiddleware,compose} from 'redux';
import {Provider,connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './src/redux/reducer/index';
import Navigation from './src/navigation/screens';



const store = createStore(reducer,compose(applyMiddleware(ReduxThunk,logger)));


export default function App(){
  return(
    
    <Provider store={store}>
       <Navigation />
    </Provider>

  );
}