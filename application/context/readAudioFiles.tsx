import RNFS from 'react-native-fs';

export async function readAudioFiles() {
    try {
        // Get the path to the directory containing audio files
        const directoryPath = RNFS.ExternalStorageDirectoryPath;
        // Change to the appropriate directory path as per your requirement
        console.log('DIRECTORY PATH === ', directoryPath);
        // Read the files in the directory
        const files = await RNFS.readDir(directoryPath);

        // Process the audio files
        files.forEach(async file => {
            // Check if the file is an audio file (you can customize the check based on your file types)
            if (file.name.endsWith('.mp3') || file.name.endsWith('.wav')) {
                // Do something with the audio file
                console.log('Audio file found:', file.name);
                console.log('File path:', file.path);

                // You can perform operations like playing the audio file using "react-native-sound"
                // Example:
                // const sound = new Sound(file.path, '', error => {
                //   if (error) {
                //     console.log('Error loading sound:', error);
                //     return;
                //   }
                //   sound.play();
                // });
            }
        });
    } catch (error) {
        console.log('Error occurred while reading audio files:', error);
    }
};