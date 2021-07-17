import React, { useContext } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';

import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {

    const { setDarkTheme, setlightTheme, theme } = useContext(ThemeContext);

    return (
        <View style={ styles.globalMargin } >
            <HeaderTitle title="Theme" />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <TouchableOpacity
                    onPress={setlightTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: theme.colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 20
                    }} >
                        <Text style={{ 
                            color: 'white',
                            fontSize: 22
                        }} >
                            Light    
                        </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: theme.colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 20
                    }} >
                        <Text style={{ 
                            color: 'white',
                            fontSize: 22
                        }} >
                            Dark    
                        </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChangeThemeScreen
