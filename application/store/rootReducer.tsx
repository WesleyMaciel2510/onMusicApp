import {combineReducers} from 'redux';
import headerReducer from './reducers/header';
import {RootState} from './reducers/types';

const rootReducer = combineReducers<RootState>({
  header: headerReducer,
  // Add other reducers here if applicable
});

export default rootReducer;
