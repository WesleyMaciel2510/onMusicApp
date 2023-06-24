import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

interface Props {
    navigation: any;
}

const Home = (props: Props): JSX.Element => {

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
    };
    const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';

    return (
        <SafeAreaView style={[styles.container, backgroundStyle]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundStyle.backgroundColor} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                <View style={[styles.contentContainer, backgroundStyle]}></View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
});

export default Home;
