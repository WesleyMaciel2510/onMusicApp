import React from 'react';
import { Button } from 'react-native';
import Sound from 'react-native-sound';

const MyComponent: React.FC = () => {
    const playAudio = () => {
        const sound = new Sound('my-audio-file.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Failed to load the sound', error);
            } else {
                console.log('Sound loaded successfully');

                // Play the audio
                sound.play();
            }
        });
    };

    return (
        <Button title="Play Audio" onPress={playAudio} />
    );
};

export default MyComponent;
