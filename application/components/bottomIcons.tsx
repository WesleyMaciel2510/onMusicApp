/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


interface Props {
    navigation: any;
}

export default function BottomIcons(props: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}
                onPress={() => props.navigation.navigate('Home')}>
                <Icon name="home" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}
                onPress={() => props.navigation.navigate('Search')}>
                <Icon name="search" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}
                onPress={() => props.navigation.navigate('Library')}>
                <Icon name="folder-open" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}
                onPress={() => props.navigation.navigate('PrivacyPolicy')}>
                <Icon name="user" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}
                onPress={() => props.navigation.navigate('MusicPlayer')}>
                <Icon name="headphones" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        height: 50,
        bottom: 0,
        width: '100%',
        backgroundColor: '#4d94ff',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
});