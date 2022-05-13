import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import Favourite from '../Screens/TabScreen/Favourite';
import Cart from '../Screens/TabScreen/Cart';
//navigatoer
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


//icon library
import { FontAwesome5 } from '@expo/vector-icons';
import GameDeatels from '../Screens/DeatilsScreen/GameDeatels';

import DeatelsStack from '../routes/DeatelsStack'

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
          tabBarStyle: { backgroundColor: '#7D1E6A' }, 
          drawerLabelStyle:{ fontSize:16 , fontWeight:'bold' ,marginLeft:-25 } ,
          tabBarShowLabel:false,
          headerShown:false,
        })}  
    
    >
    {/* Deatel stack to accses another screen inside home page  */}
    <Tab.Screen name="Home2" component={DeatelsStack}  
    //for all Deatel screen 
      options={ ({route}) => ({
        // title : route.params?.title
        tabBarStyle : { display : getTabBarVisebel(route) , backgroundColor:'#7D1E6A'}
     })}
    />  
    <Tab.Screen name="Favorite" component={Favourite} /> 
    <Tab.Screen name="cart" component={Cart} options={{ tabBarBadge:3 , 
        tabBarBadgeStyle : { backgroundColor:'yellow'}
    
     }} 
     /> 

  </Tab.Navigator>
  )
}

//visbel navbar throw routeName 
const getTabBarVisebel = (route) => {
  // console.log(route)
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'; 
  console.log(routeName) 

  if (routeName ==='GameDeatels') {
    return 'none'
  }
  'flex' 
  if (routeName ==='PaidDeatels') {
    return 'none'
  }
  'flex' 
}

export default TabBarNav