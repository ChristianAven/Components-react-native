import React, { useContext, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import CustomSwich from '../components/CustomSwich';

import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwichScreen = () => {
    
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true, 
    });

    const {theme: { colors } } = useContext(ThemeContext);


    const onChange = ( value: boolean, field: string ) => {
        setState({
            ...state,
            [field]: value
        });
    }
    
    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title='Swiches' />

            <View style={ styles.swichRow } >
                <Text style={{...styles.switchText, color:colors.text}} >isActive</Text>
                <CustomSwich isOn={state.isActive} onChange={ (value) => onChange( value, 'isActive' )} />
            </View>

            <View style={ styles.swichRow } >
                <Text style={{...styles.switchText, color: colors.text}} >isHungry</Text>
                <CustomSwich isOn={state.isHungry} onChange={ (value) => onChange( value, 'isHungry' )} />
            </View>
            
            <View style={ styles.swichRow } >
                <Text style={{...styles.switchText, color: colors.text}} >isHappy</Text>
                <CustomSwich isOn={state.isHappy} onChange={ (value) => onChange( value, 'isHappy' )} />
            </View>
            
            <Text style={{
                ...styles.switchText,
                marginTop: 50,
                color: colors.text
            }}>
                { JSON.stringify( state, null, 4 ) }
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },

    swichRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default SwichScreen