import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';
import Library from '../screens/Library';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer theme={CustomNavigationTheme}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    ...TransitionPresets.ModalSlideFromBottomIOS, // Apply a custom transition animation
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Library" component={Library} />
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
