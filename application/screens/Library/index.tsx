import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Button } from 'react-native';

interface Props {
    navigation: any;
}

const Library = (props: Props): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
    };
    const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';

    const handleButtonPress = () => {
        props.navigation.navigate('Home');
    };

    return (
        <View style={[styles.container, backgroundStyle]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundStyle.backgroundColor} />
            <View style={[styles.contentContainer, backgroundStyle]}>
                <View style={styles.buttonContainer}>
                    <Button title="Go to Home" onPress={handleButtonPress} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Add default black background color
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        color: 'white',
    },
});

export default Library;
