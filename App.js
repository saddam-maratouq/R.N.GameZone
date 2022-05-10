import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView  } from 'react-native';
import Main from './Screens/Main';
import Home from './Screens/Home';

import MainRoute from './routes/MainRoute';

import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 


export default function App() {
  return (
    // <View style={styles.container} > 
    //   {/* <Main/>    */}
    //   <MainRoute/>  
    // </View> 
   
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName='Main' >
    //   <Stack.Screen name="Main" component={ Main } /> 
    //   <Stack.Screen name="Home" component= {Home} />   
    // </Stack.Navigator>
    // </NavigationContainer>  
        <>
        <MainRoute/> 
        </>
   
  
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
    // backgroundColor:'red'
  },
});
