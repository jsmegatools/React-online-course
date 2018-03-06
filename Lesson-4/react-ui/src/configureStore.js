import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux';
 
export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  );
}
