import React from 'react';
import { StatusBar, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { userColorScheme } from '../../components/userColorScheme';
import { useNavigation } from '@react-navigation/native';
import BottomIcons from '../../components/bottomIcons';



interface Props {
    navigation: any;
}

const Home = (props: Props): JSX.Element => {
    const navigation = useNavigation();

    const { backgroundStyle, statusBarStyle } = userColorScheme();

    const handleButtonPress = () => {
        props.navigation.navigate('Library');
    };

    return (
        <View style={styles.container}>
            <View style={[styles.backgroundContainer, backgroundStyle]}>
                <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundStyle.backgroundColor} />

                <View style={styles.contentContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title="Go to Library" onPress={handleButtonPress} />
                    </View>
                </View>
                <BottomIcons navigation={props.navigation} />
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