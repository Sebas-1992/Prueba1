import React from 'react';

import{
    View,
    Text,
    Button
} from 'react-native';

const Interface2 = (props) =>{

    const { cambiarPantalla, usuario} = props;

    return(

        <View>
            <Text>Bienvenido {usuario}</Text>

            <Button
                title = 'Ir a la interface 1'
                color = 'green'

                onPress = {
                    () =>{
                        cambiarPantalla('interface1');
                    }
                }
            />
        </View>

    );
}

export default Interface2;