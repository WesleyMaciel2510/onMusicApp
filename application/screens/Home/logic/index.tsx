import { useState, useEffect } from 'react';
import { useBetween } from 'use-between';
import { requestAudioFilePermission } from '../../../context/audioRequest';
import { readAudioFiles } from '../../../context/readAudioFiles';

// ----------- Sharabled State -----------
const useLogicStates = () => {
    const [example, setExample] = useState([]);
    const [accessToAudio, setAccessToAudio] = useState(false);

    return {
        example, setExample,
        accessToAudio, setAccessToAudio,
    };
};

// ----------- All Shared States -----------
export const useSharedState = () => useBetween(useLogicStates);

//= ==============================================================================================
export function useInit() {
    const { accessToAudio, setAccessToAudio } = useSharedState();

    const handlePermissionRequest = async () => {
        await requestAudioFilePermission(setAccessToAudio);
    }
    const handleReadAudioFiles = async () => {
        await readAudioFiles();
    }

    handlePermissionRequest();
    handleReadAudioFiles();

    /* useEffect(() => {
        (async () => {
        })();
    }, []); */
}
