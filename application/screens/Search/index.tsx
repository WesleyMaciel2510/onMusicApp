/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Button } from 'react-native';
import { userColorScheme } from '../../components/userColorScheme';
import BottomIcons from '../../components/bottomIcons';
import { useInit, useSharedState } from './logic';

interface Props {
    navigation: any;
}

const Search = (props: Props): JSX.Element => {
    /* const { } = useSharedState(); */
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

export default Search;
