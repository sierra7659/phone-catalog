import { createStore, applyMiddleware } from 'redux';
import phonesReducer from './reducers/reducer'
import thunk from 'redux-thunk';

const store = createStore(phonesReducer,applyMiddleware(thunk));

export default store;