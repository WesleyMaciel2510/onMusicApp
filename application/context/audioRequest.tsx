import React from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

export async function requestAudioFilePermission(setAccessToAudio: {
  (value: React.SetStateAction<boolean>): void;
  (arg0: boolean): void;
}) {
  try {
    if (Platform.OS === 'android') {
      console.log('Going to request permission.');
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Audio File Access Permission',
          message: 'This app needs access to your audio files.',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Audio file permission granted.');
        setAccessToAudio(true);
      } else {
        console.log('Audio file permission denied.');
      }
    } else {
      const result = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);
      if (result === 'granted') {
        console.log('Audio file permission granted.');
      } else {
        console.log('Audio file permission denied.');
      }
    }
  } catch (error) {
    console.log(
      'Error occurred while requesting audio file permission:',
      error,
    );
  }
}
