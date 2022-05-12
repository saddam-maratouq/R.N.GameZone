import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';


import Main from '../Screens/Main';
import Home from '../Screens/Home';
import CustoemDrawer from '../components/CustoemDrawer';


//icon laibrary 

import { FontAwesome5 } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();  
const Drawer = createDrawerNavigator();



 const MainRoute = () => {
        
  return (
      <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <CustoemDrawer {...props} />  } initialRouteName='Main'
      
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => { 
            let Icons; 

            if (route.name === 'Home') {
                Icons = 'home' 
               size = focused ? 25 : 20 
              //  color = focused ? '#f0f' : '#555'
            }
                
             else if (route.name === 'Main') { 
                Icons =  'heart'  
               size = focused ? 25 : 20 
              //  color = focused ? '#f0f' : '#555'
            }


            return <FontAwesome5 name={Icons} size={size} color={color} />  
          
          },
          //another way to control color with more options ...
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333', 
          drawerActiveBackgroundColor : '#aa18ea',  
          BarStyle: { backgroundColor: 'black' }, 
          drawerLabelStyle:{ fontSize:16 , fontWeight:'bold' ,marginLeft:-25 } 
        })}  
       
        >
        <Drawer.Screen name="Home" component= {Home} options={{headerShown:false}}  />    
        <Drawer.Screen name="Main" component={ Main} options={{headerShown:false}} />
      </Drawer.Navigator>
      </NavigationContainer>   
     
  ); 
}



export default MainRoute ; 

const styles = StyleSheet.create({})