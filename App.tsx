import 'react-native-gesture-handler';
import React from 'react'
import Navigator from './src/navigator/Navigator';
import { ThemePriveder } from './src/context/themeContext/ThemeContext';

// const custonTheme: Theme = {
//     dark: true,
//     colors: {
//         ...DarkTheme.colors
//         // primary:    string;
//         // background: string;
//         // card:       string;
//         // text:       string;
//         // border:     string;
//     }
// }

const App = () => {
    return (
        <AppState>
            <Navigator />
        </AppState>
    )
}


const AppState = ({children}: any) => {

    return (
        <ThemePriveder>
            { children }
        </ThemePriveder>
    )
}

export default App;