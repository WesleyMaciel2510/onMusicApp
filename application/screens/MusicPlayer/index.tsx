import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Button } from 'react-native';
import { userColorScheme } from '../../components/userColorScheme';
import BottomIcons from '../../components/bottomIcons';

interface Props {
    navigation: any;
}

const MusicPlayer = (props: Props): JSX.Element => {
    const { backgroundStyle, statusBarStyle } = userColorScheme();

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
            <BottomIcons navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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

export default MusicPlayer;