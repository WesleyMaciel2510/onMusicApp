import React from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';

export async function requestAudioFilePermission() {
    try {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Audio File Access Permission',
                    message: 'This app needs access to your audio files.',
                    buttonPositive: 'OK',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Audio file permission granted.');
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
        console.log('Error occurred while requesting audio file permission:', error);
    }
}
