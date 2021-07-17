import React, { useContext } from 'react'
import { View, Button, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';


const AlertScreen = () => {

    const {theme: { colors } } = useContext(ThemeContext);


    const showAlert = () => {

        Alert.alert(
            "Titulo de la alerta",
            "Subtitulo de la alerta",
            [
                {
                    text:"Cancelar",
                    onPress: () => console.log("Boton de cancelar precionado"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK precionado")}
            ],
            {
                cancelable: true
            }
        )
    }

    const showPrompt = () => {

        // Alert.prompt(
        //     "Titulo del prompt",
        //     "Mensaje del Prompt",
        //     ( valor: string ) => console.log("info: ", valor),
        //     "plain-text",
        //     "Hola mundo",
        //     "number-pad"
        // )
        prompt(
            "Titulo del prompt",
            "Mensaje del Prompt",
            [
                { text: 'Cancel', onPress: () => console.log('Cancel precionado'), style: 'cancel'},
                { text: 'Ok', onPress: password => console.log('Ok presionado, Password: ', password )}
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'Hola mundo',
                placeholder: 'PlaceHolder'                
            }
        )

    }

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title='Alerts' />

            <Button
                color={colors.primary}
                title='Mostrar Alerta'
                onPress={ showAlert }
            />
            
            <View style={{ marginVertical: 10 }} />

            <Button
                color={colors.primary}
                title='Mostrar Prompt'
                onPress={ showPrompt }
            />

        </View>
    )
}

export default AlertScreen