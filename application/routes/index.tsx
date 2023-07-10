import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';
import Library from '../screens/Library';
import Search from '../screens/Search';
import MusicPlayer from '../screens/MusicPlayer';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={CustomNavigationTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalFadeTransition, // Apply a custom transition animation
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
