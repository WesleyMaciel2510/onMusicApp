import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { userColorScheme } from '../../components/userColorScheme';

interface Props {
    navigation: any;
}

const Home = (props: Props): JSX.Element => {
    const { backgroundStyle } = userColorScheme();

    const handleButtonPress = () => {
        props.navigation.navigate('Library');
    };

    return (
        <View style={styles.container}>
            <View style={[styles.backgroundContainer, backgroundStyle]}>
                <View style={styles.contentContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title="Go to Library" onPress={handleButtonPress} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const Library = (props: Props): JSX.Element => {
    const { backgroundStyle } = userColorScheme();

    const handleButtonPress = () => {
        props.navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={[styles.backgroundContainer, backgroundStyle]}>
                <View style={styles.contentContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title="Go to Home" onPress={handleButtonPress} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
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

export default Home;