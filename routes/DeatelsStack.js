import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameDeatels from '../Screens/DeatilsScreen/GameDeatels';
import Home from '../Screens/Home';
import PaidDeatels from '../Screens/DeatilsScreen/PaidDeatels';

const Stack = createNativeStackNavigator();

const DeatelsStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="GameDeatels" component={GameDeatels} 
     //display title throw route.params in specfic screen (gameDeatels)
     options={ ({route}) => ({
        // title : route.params?.title
        title : route.params.title
     })}
       
     />
    <Stack.Screen name="PaidDeatels" component={PaidDeatels} 
     //display title throw route.params in specfic screen (PaidDeatels)

       options={ ({route}) => ({
        title : route.params?.title 
     })}
    /> 

  </Stack.Navigator>
  )
}

export default DeatelsStack




