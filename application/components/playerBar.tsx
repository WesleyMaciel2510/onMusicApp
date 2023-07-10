import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PlayerBarProps {
  title: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  handleBack: () => void;
  handleForward: () => void;
}

const PlayerBar: React.FC<PlayerBarProps> = ({
  title,
  isPlaying,
  onPlayPause,
  handleBack,
  handleForward,
}) => {
  return (
    <View style={styles.container}>
      <Icon name="music" size={30} color="white" />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleBack} style={styles.iconButton}>
          <Icon name="backward" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPause} style={styles.iconButton}>
          {isPlaying ? (
            <Icon name="pause" size={24} color="#fff" />
          ) : (
            <Icon name="play" size={24} color="#fff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward} style={styles.iconButton}>
          <Icon name="forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4287f5',
    borderRadius: 8,
    padding: 30,
    borderWidth: 3, // Add a border width of 3px
    borderColor: 'white', // Set the border color to white
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 10,
  },
});

export default PlayerBar;
