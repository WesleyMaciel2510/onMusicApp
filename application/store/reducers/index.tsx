import {combineReducers} from 'redux';
import headerReducer from './header'; // Import your header reducer

const rootReducer = combineReducers({
  header: headerReducer,
  // Add other reducers here if needed
});

export default rootReducer;
