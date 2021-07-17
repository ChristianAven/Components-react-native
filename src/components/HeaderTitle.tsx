import React, { useContext } from 'react'

import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme'

import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    title: string;
}

const HeaderTitle = ({ title }:Props) => {

    const {top} = useSafeAreaInsets()
    const { theme } = useContext(ThemeContext);

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{
                ...styles.title,
                color: theme.colors.text    
            }}>
                { title }
            </Text>
        </View>
    )
}

export default HeaderTitle
