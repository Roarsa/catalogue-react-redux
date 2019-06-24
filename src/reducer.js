import { combineReducers } from 'redux';
import catalogue from './reducers/catalogue';

const reducer = combineReducers({
  catalogue,
});

export default reducer;