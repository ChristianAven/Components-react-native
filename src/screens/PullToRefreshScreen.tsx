import React, { useContext } from 'react'
import { ScrollView, View, RefreshControl, Text } from 'react-native';
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {

    const {theme: { colors } } = useContext(ThemeContext);

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>()


    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log("terminamos!");
            setRefreshing(false);
            setData("hola mundo");
        }, 3500);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={ 10 }
                    progressBackgroundColor={colors.primary}
                    colors={["white","blue","orange"]} // solo funciona en android
                    style={{ backgroundColor: colors.primary }} // solo funciona en IOS
                    tintColor="white" // solo funciona en IOS
                />
            }
        >
            <View style={styles.globalMargin} >
                <HeaderTitle title='Pull To Refresh' />

                <Text style={{ color: colors.text }} >{data}</Text>

            </View>
        </ScrollView>
    )
}

export default PullToRefreshScreen
