import 'react-native-gesture-handler'
import React from 'react'
import { View,Text} from 'react-native'
import { NavigationContainer}from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Inicio from './views/Inicio'
import Nosotros from './views/Nosotros'

const Stack = createStackNavigator()


const App = () => {
  return (
    <>
      
<NavigationContainer>

<Stack.Navigator initialRouteName='Inicio' screenOptions={{
   title:'Componente Principal',
   headerTitleAlign:'left',
   
   headerStyle:{
    backgroundColor:'#F4511E'
   },headerTintColor:'#FFF',
   headerTitleStyle:{
    fontWeight:'bold',
    textTransform:'uppercase'
   }



   }}>




   <Stack.Screen  name="Inicio" component={Inicio} />
   <Stack.Screen  name="Nosotros" component={Nosotros} 
   options={({route})=>({
    title:route.params.clienteId


   })}
   
   
   />
</Stack.Navigator>
</NavigationContainer>


    </>
  )
}

export default App
