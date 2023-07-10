import {useState, useEffect} from 'react';
import {useBetween} from 'use-between';
import {useSelector, useDispatch} from 'react-redux';
import {requestAudioFilePermission} from '../../../context/audioRequest';
/* import {readAudioFiles} from '../../../context/readAudioFiles'; */
import TrackPlayer from 'react-native-track-player';
import {RootState} from '../../../store/reducers/types';
import { setTrackPlayer } from '../../../store/Actions/headerActions';

// ----------- Sharabled State -----------
const useLogicStates = () => {
  const [example, setExample] = useState([]);
  const [accessToAudio, setAccessToAudio] = useState(false);

  return {
    example,
    setExample,
    accessToAudio,
    setAccessToAudio,
  };
};

// ----------- All Shared States -----------
export const useSharedState = () => useBetween(useLogicStates);

//= ==============================================================================================
export function useInit() {
  const dispatch = useDispatch();
  const header = useSelector((state: RootState) => state.header);
  const {accessToAudio, setAccessToAudio} = useSharedState();

  const handlePermissionRequest = async () => {
    await requestAudioFilePermission(setAccessToAudio);
  };
  /*  const handleReadAudioFiles = async () => {
    await readAudioFiles();
  }; */
  const handlePlayer = async () => {
    //validate to not setup the Player more than once
    console.log('SERAAAAAAAAAAAAAA ?? ', header.trackPlayer);

    if (!header.trackPlayer) {
      await TrackPlayer.setupPlayer();
      dispatch(setTrackPlayer(true)); // Update the flag after initialization
      console.log('MANUCUFEDAPUTA VAI ENGANAR SEU PAI');
    } else {
      // Player is already initialized, so you can handle it accordingly
      console.log('Player is already initialized.');
    }
  };
  handlePermissionRequest();
  //handleReadAudioFiles();
  handlePlayer();
}
