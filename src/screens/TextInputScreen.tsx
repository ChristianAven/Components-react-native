import React, { useContext } from 'react';

import { 
    Text,
    View,
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Keyboard
} from 'react-native';

import { ThemeContext } from '../context/themeContext/ThemeContext';

import { styles } from '../theme/appTheme';

import { useForm } from '../hooks/useForm';

import HeaderTitle from '../components/HeaderTitle';
import CustomSwich from '../components/CustomSwich';

const TextInputScreen = () => {

    const {theme: { colors } } = useContext(ThemeContext);


    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView>
                <TouchableWithoutFeedback onLongPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='TextInput' />

                        <TextInput 
                            style={{ ...stylesTextScreen.inputStyle, borderColor: colors.text, color: colors.text }}
                            placeholder='Ingrese su nombre'
                            placeholderTextColor= {colors.text}
                            autoCorrect={ false }
                            autoCapitalize='words'
                            onChangeText={ value => onChange(value, 'name') }
                            />

                        <TextInput 
                            style={{...stylesTextScreen.inputStyle, borderColor: colors.text, color: colors.text}}
                            placeholder='Ingrese su email'
                            placeholderTextColor= {colors.text}
                            autoCorrect={ false }
                            autoCapitalize='none'
                            onChangeText={ value => onChange(value, 'email') }
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                        />

                        <View style={ stylesTextScreen.swichRow } >
                            <Text style={{...stylesTextScreen.switchText, color: colors.text}} >isActive</Text>
                            <CustomSwich isOn={form.isSubscribed} onChange={ (value) => onChange( value, 'isSubscribed' )} />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />
                        <HeaderTitle title={ JSON.stringify( form, null, 4 ) } />

                        <TextInput 
                            style={{
                                ...stylesTextScreen.inputStyle,
                                marginBottom: 100,
                                borderColor: colors.text,
                                color: colors.text
                            }}
                            placeholder='Ingrese su telefono'
                            placeholderTextColor= {colors.text}
                            onChangeText={ value => onChange(value, 'phone') }
                            keyboardType='phone-pad'
                            />

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

const stylesTextScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },

    swichRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default TextInputScreen