import {TRACK_PLAYER} from '../consts';
import {AnyAction} from 'redux';
import {HeaderState} from './types'; // Import your header state type

const INITIAL_STATE: HeaderState = {
  trackPlayer: false,
  title: '',
  count: 0,
  price: 0,
  items: [],
  user: {
    name: '',
    age: 0,
    email: '',
  },
};

const header = (
  state: HeaderState = INITIAL_STATE,
  action: AnyAction,
): HeaderState => {
  const {payload} = action;
  switch (action.type) {
    case TRACK_PLAYER:
      return {
        ...state,
        trackPlayer: payload,
      };
    default:
      return state;
  }
};

export default header;
