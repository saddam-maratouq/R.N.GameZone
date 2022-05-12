import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';


import Main from '../Screens/Main';
import Home from '../Screens/Home';


const Stack = createNativeStackNavigator();  
const Drawer = createDrawerNavigator();



 const MainRoute = () => {
        
  return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName='Main' >
        <Drawer.Screen name="Main" component={ Main} options={{ headerShown:false}} />
        <Drawer.Screen name="Home" component= {Home} options={{ headerShown:false}}  />    
      </Drawer.Navigator>
      </NavigationContainer>   
     
  ); 
}



export default MainRoute ; 

const styles = StyleSheet.create({})