import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './_reducer';

const middleware = [thunk];
const intitialState = {};

const store = createStore(rootReducer, intitialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;