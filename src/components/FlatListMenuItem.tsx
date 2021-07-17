import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { color } from 'react-native-reanimated';


interface Props {
    menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }:Props) => {
    
    const navigation = useNavigation();
    const {theme: { colors } } = useContext(ThemeContext);


    const { name, icon, component } = menuItem;

    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(component)}
        >

            <View style={ styles.container }>
                <Icon 
                    name={ icon }
                    size={ 23 }
                    color={ colors.primary }
                />

                <Text style={{
                    ...styles.itemText,
                    color: colors.text
                }}>
                    { name }
                </Text>

                <View style={{ flex: 1 }} />

                <Icon 
                    name='chevron-forward-outline'
                    size={ 23 }
                    color={colors.primary}
                />

            </View>

        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18,
    },
    

});

export default FlatListMenuItem;