/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import { userColorScheme } from '../../components/userColorScheme';
import { useNavigation } from '@react-navigation/native';
import BottomIcons from '../../components/bottomIcons';
import PlayerBar from '../../components/playerBar';
import { useInit, useSharedState } from './logic';
import header from '../../store/reducers/header';

//= ==========================================================================================================

interface Props {
  navigation: any;
}
//= ==========================================================================================================

const Home = (props: Props): JSX.Element => {
  useInit();

    /* const { } = useSharedState(); */
    const navigation = useNavigation();

    const { backgroundStyle, statusBarStyle } = userColorScheme();

    const handleButtonPress = () => {
        props.navigation.navigate('Library');
    };

    return (
      <View style={styles.container}>
        <View style={[styles.backgroundContainer, backgroundStyle]}>
          <StatusBar
            barStyle={statusBarStyle}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <View style={styles.contentContainer}>
            <View style={styles.buttonContainer}>
              <Button title="Go to Library" onPress={handleButtonPress} />
            </View>
          </View>
          {<PlayerBar title={'MUSICA'} isPlaying={false} onPlayPause={function (): void {
            console.log('PAUSOU');
          } } handleBack={function (): void {
            throw new Error('Void Function.');
          } } handleForward={function (): void {
            throw new Error('Void Function.');
          } }/>}

          <View style={styles.playerArea}>
            <Text style={styles.title}>MUSICA</Text>
            <TouchableOpacity onPress={console.log('PAUSE')} style={styles.button}>
              <Text style={styles.buttonText}>
                {/* {isPlaying ? 'Pause' : 'Play'} */} PLAY/PAUSE
              </Text>
            </TouchableOpacity>
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
  playerArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4d94ff',
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4287f5',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Home;