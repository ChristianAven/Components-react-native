import React, { useContext } from 'react'
import { View, SectionList, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { casas } from '../data/SectionListData';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SectionListScreen = () => {

    const {theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>

            <SectionList 
                sections={casas}
                renderItem={ ({item}) => <Text style={{color:colors.text}} >{item}</Text> }
                keyExtractor={ (item, index) => item + index}
                stickySectionHeadersEnabled
                ListHeaderComponent={ () => <HeaderTitle title='Section List' />}
                ItemSeparatorComponent={ () => <ItemSeparator /> }
                showsVerticalScrollIndicator={ false }           
                renderSectionHeader={ ({ section }) => (
                    <View style={{ backgroundColor: colors.background }} >
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
            />
        </View>
    )
}
export default SectionListScreen