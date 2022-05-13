import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Favourite from '../Screens/TabScreen/Favourite';
import Cart from '../Screens/TabScreen/Cart';



//icon library
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabBarNav = () => {
  return (
    <Tab.Navigator 
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => { 
            let Icons; 

            if (route.name === 'Home2') {
                Icons = 'home' 
               size = focused ? 30 : 25 
              //  color = focused ? '#f0f' : '#555'
            }
                
             else if (route.name === 'Favorite') { 
                Icons =  'heart'  
               size = focused ? 30 : 25 
              //  color = focused ? '#f0f' : '#555'
            }

            else if (route.name === 'cart') { 
                Icons =  'shopping-cart'  
               size = focused ? 30 : 25 
              //  color = focused ? '#f0f' : '#555'
            }

            return <FontAwesome5 name={Icons} size={size} color={color} />  
          
          },
          //another way to control color with more options ...
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: '#fff', 
          tabBarStyle: { backgroundColor: '#AD40Af' }, 
          drawerLabelStyle:{ fontSize:16 , fontWeight:'bold' ,marginLeft:-25 } ,
          tabBarShowLabel:false,
          headerShown:false,
        })}  
    
    >
    <Tab.Screen name="Home2" component={Home} />
    <Tab.Screen name="Favorite" component={Favourite} /> 
    <Tab.Screen name="cart" component={Cart} options={{ tabBarBadge:3 ,
        tabBarBadgeStyle : { backgroundColor:'yellow'}
    
     }} /> 

  </Tab.Navigator>
  )
}

export default TabBarNav