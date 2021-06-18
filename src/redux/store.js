import {createStore, applyMiddleware} from 'redux'; 


import rootReducer from './root-reducer'
import thunk from 'redux-thunk';

// const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;