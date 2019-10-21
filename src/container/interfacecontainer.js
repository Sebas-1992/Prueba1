import React, {Component} from 'react';

import Interface1 from '../componente/interface1';
import Interface2 from '../componente/interface2';

class Interfacecontainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            vista:'interface1',
            usuario: '',
        }
    }

    miEventoTexto = (data)=>{
        this.setState({usuario: data,})
    }

    cambiarPantalla  = ( pantalla)=> {

        this.setState({
            vista: pantalla
        })

    };

    render(){
        
        const {vista , usuario} = this.state;

        if(vista === 'interface1'){
            return(
                <Interface1
                   miOnChangeUsuario = {this.miEventoTexto}
                   nombre={usuario}
                   cambiarPantalla = {this.cambiarPantalla}
                />
            );
        }

        if(vista === 'interface2'){
            return(
                <Interface2
                    cambiarPantalla = {this.cambiarPantalla}
                    usuario = {usuario}
                />
            );
        }
    }
}

export default Interfacecontainer;