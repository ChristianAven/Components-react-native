import React, { useContext, useRef, useState } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

const Animation101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();
    const {theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={ styles.container } >

            <Animated.View 
                style={{ 
                    ...styles.purpleBox,
                    marginBottom: 20,
                    opacity,
                    transform: [{
                        translateY: position
                    }]
                }} 
            />

            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 12 }}>
                    <Button
                        color={colors.primary}
                        title="fadeIn"
                        onPress={() =>{
                            fadeIn(); 
                            startMovingPosition(-200, 1000)
                        }}
                    />
                </View>

                <Button 
                    color={colors.primary}
                    title="fadeOut"
                    onPress={() =>{
                        fadeOut(); 
                    }}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    purpleBox: {
        backgroundColor: "#5856D6",
        width: 150,
        height: 150
    }
});

export default Animation101Screen;