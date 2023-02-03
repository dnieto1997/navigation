import React from 'react'
import { View,Text,StyleSheet,Button} from 'react-native'
const Inicio = ({navigation}) => {
  

const informacion ={

  clienteId:20,
  totalPagar:500
}

  const visitarNosotros = () =>{

   navigation.navigate('Nosotros',informacion)
  }
  
    return (
    <View style={styles.contenedor}>
    
    <Text>
    Inicio
  </Text>

  <Button title='Ir a nosotros' onPress={()=> visitarNosotros()}/>
  </View>
  )
}

const styles =StyleSheet.create({

contenedor:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
}


})

export default Inicio
