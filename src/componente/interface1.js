import React from 'react';

import{
    View,
    Text,
    TextInput,
    Button, 
} from 'react-native';

const Interface1 = (props) =>{

    const { cambiarPantalla,
         miOnChangeUsuario, 
         nombre } = props;

    return(

        <View>
            <Text>Interface1 </Text>

            <View>
                <TextInput
                   onChangeText={miOnChangeUsuario}
                    defaultvalue={nombre}
                />
            </View>

            <Button
                title = 'Ir a la interface 2'
                color = 'red'

                onPress = {
                    () =>{
                        cambiarPantalla('interface2');
                    }
                }
            />
        </View>

    );
}

export default Interface1;