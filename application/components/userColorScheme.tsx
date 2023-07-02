import { useColorScheme, StatusBarStyle } from 'react-native';

export function userColorScheme() {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#000' : '#FFF',
    };
    const statusBarStyle: StatusBarStyle = isDarkMode ? 'light-content' : 'dark-content';

    return { backgroundStyle, statusBarStyle };
}
