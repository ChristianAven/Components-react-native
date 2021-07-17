import React, { useRef } from 'react'

import { StyleSheet, View, Animated, PanResponder } from 'react-native';

const Animation102Screen = () => {

    const pan = useRef( new Animated.ValueXY() ).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          { dx: pan.x, dy: pan.y}
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
          ).start();
        },
      });

    return (
        <View style={ styles.constainer } >

            <Animated.View
                { ...panResponder.panHandlers }
                style={[pan.getLayout(), styles.box]} 
            />

        </View>
    );
};




const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: "#d00000",
        borderRadius: 100,
        width: 150,
        height: 150
    }
});

export default Animation102Screen;