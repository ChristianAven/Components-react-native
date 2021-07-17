import React, {useContext, useState} from 'react'
import { 
    TouchableWithoutFeedback, 
    useWindowDimensions,
    View, 
    Button, 
    Modal, 
    Text 
} from 'react-native';

import HeaderTitle from '../components/HeaderTitle';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import { styles } from '../theme/appTheme';


const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    const {theme: { colors } } = useContext(ThemeContext);
    const { height, width } = useWindowDimensions();


    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Modal' />

            <Button
                color={colors.primary}
                title='Modal'
                onPress={ () => setIsVisible( (visible) => !visible) }
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent
            >

                {/* Background del modal */}
                <TouchableWithoutFeedback touchSoundDisabled onPress={ () => setIsVisible(false)}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    />
                </TouchableWithoutFeedback>
                    {/* Contenido del modal */}
                    <View style={{
                        position: 'absolute',
                        top: height * 0.5 - 100,
                        left: width * 0.5 - 100,
                        height: 200,
                        width: 200,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                         borderRadius: 10
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Modal</Text>
                        <Text style={{ marginBottom: 30 }}>Cuerpo del modal</Text>
                        <Button 
                            title='Cerrar'
                            onPress={ () => setIsVisible(false) }
                        />
                    </View>

                

            </Modal>

        </View>
    )
}
export default ModalScreen