import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';
import { styles } from '../theme/appTheme';


const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([1,2,3,4,5,1,2,3,4,5])

    const loadMore = () => {
        const newArray: number[] = [];
        for( let i = 0; i < 5; i++ ){
            newArray[i] = numbers.length + i;
        }

        setNumbers([...numbers, ...newArray]);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage
                style={{
                    width: '100%',
                    height: 400
                }}
                uri={`https://picsum.photos/id/${item}/500/400`}/>
        )
    }

    return (
        <View style={{ flex: 1}}>
            <FlatList 
                data={ numbers }
                keyExtractor={ (item, index) => (item + index).toString() }
                renderItem={ ({item}) => renderItem(item) }
                ListHeaderComponent={() => (
                    <View style={ styles.globalMargin }>
                        <HeaderTitle title='Infinite Scroll' /> 
                    </View>
                )}
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }
            />

        </View>
    )
}

export default InfiniteScrollScreen 