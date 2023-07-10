import {TRACK_PLAYER} from '../consts';

export const setTrackPlayer = (payload: any) => ({
  type: TRACK_PLAYER,
  payload,
});
