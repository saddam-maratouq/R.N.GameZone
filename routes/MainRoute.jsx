import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


    import Main from '../Screens/Main';
    import Home from '../Screens/Home';


    const Stack = createNativeStackNavigator(); 



 const MainRoute = () => {
        
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Main" component={ Main} options={{ headerShown:false}} />
        <Stack.Screen name="Home" component= {Home} options={{ headerShown:false}}  />    
      </Stack.Navigator>
      </NavigationContainer>  
     
  ); 
}



export default MainRoute ; 

const styles = StyleSheet.create({})