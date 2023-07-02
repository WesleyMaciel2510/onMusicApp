/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Button } from 'react-native';
import { userColorScheme } from '../../components/userColorScheme';
import BottomIcons from '../../components/bottomIcons';
import { useInit, useSharedState } from './logic';

interface Props {
    navigation: any;
}

const MusicPlayer = (props: Props): JSX.Element => {
    /* const { } = useSharedState(); */
    const { backgroundStyle, statusBarStyle } = userColorScheme();

    const handleButtonPress = () => {
        props.navigation.navigate('Home');
    };

    return (
      <View style={[styles.container, backgroundStyle]}>
        <StatusBar
          barStyle={statusBarStyle}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={[styles.contentContainer, backgroundStyle]}>
          <View style={styles.content}></View>
          <View style={styles.musicArea}></View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    musicArea: {
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
