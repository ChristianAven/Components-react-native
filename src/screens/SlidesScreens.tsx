import React, { useContext, useState } from 'react';

import { useAnimation } from '../hooks/useAnimation';

import { 
    SafeAreaView, 
    View, 
    Text, 
    Dimensions, 
    Image, 
    StyleSheet, 
    Animated, 
    TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import { items, Slide } from '../data/SlidesData';

import { ThemeContext } from '../context/themeContext/ThemeContext';


const { height: screenHeight, width: screeenWidth } = Dimensions.get('window');

const SlidesScreens = () => {
    const {theme: { colors } } = useContext(ThemeContext);
    const { navigate } = useNavigation()
    const [pagination, setPagination] = useState(0);
    const { fadeIn, fadeOut, opacity } = useAnimation();

    const renderItem = ( item: Slide ) => {

        return(

            <View style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}>

                <Image
                    source={item.img}
                    style={{
                        position: 'relative',
                        top: -100,
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                        
                    }}
                />

                <Text style={{...styles.title, color: colors.primary}} >{item.title}</Text>
                <Text style={{...styles.subTitle, color: colors.text}} >{item.desc}</Text>

            </View>

        )

    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50
            }}
        >
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
                data={ items }
                renderItem={ ({ item }) => renderItem( item ) }
                sliderWidth={screeenWidth}
                itemWidth={screeenWidth}
                sliderHeight={ screenHeight }
                onSnapToItem={ (index) => {
                    setPagination(index)
                    if (index === items.length - 1) {
                        fadeIn(100);
                    }else{
                        fadeOut(0);
                    }

                }}
            />

            <Animated.View
                style={{ opacity }}
            >
                <TouchableWithoutFeedback
                    touchSoundDisabled
                    onPress={ () => (pagination === items.length -1) && navigate('HomeScreen')}
                >
                    <View style={ styles.buttonExit }>
                        <View style={ styles.borderButtonExit }>
                            <Icon 
                                name='arrow-forward-outline'
                                size={ 60 }
                                color='white'
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>

            <Pagination 
                dotsLength={ items.length }
                activeDotIndex={ pagination }
                // dotColor='red'
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: colors.primary
                }}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        position: 'relative',
        fontSize: 30,
        fontWeight: 'bold',
        top: -150
    },
    subTitle: {
        position: 'relative',
        fontSize: 16,
        top: -150
    },

    buttonExit: {
        alignSelf: 'center',
        backgroundColor: '#5856D6',
        borderRadius: 100,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderButtonExit: {
        borderRadius: 100,
        width: 90,
        height: 90,
        borderColor: 'white',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SlidesScreens
