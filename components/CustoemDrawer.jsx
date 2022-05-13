import { StyleSheet, Text, View , ImageBackground , Image } from 'react-native'
import React from 'react'
import {DrawerContentScrollView ,DrawerItemList} from '@react-navigation/drawer'

//icons
import { FontAwesome5 } from '@expo/vector-icons'; 

const CustoemDrawer = (props) => {
  return (
    <View style={{ flex:1}} >
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor:'#8200d6'}}
      
       >
       

       <ImageBackground   source={require('../assets/images/menu-bg.jpeg') } 
       style={{ padding:30}}
        >

       <Image source={require ('../assets/images/user-profile.jpg')} 
            style={{ width:80, height:80, marginBottom:10, borderRadius:40 , }} 
       />   

       <Text style={styles.DrawerTitle} > Joun Doe </Text> 
       <View style={styles.IconContent}>
       <Text style={{ color:'#fff', marginRight:10}} > 280 coins </Text> 
       <FontAwesome5 name="coins" size={20} color="#fff" />
       </View>

        </ImageBackground>  
          <View style={styles.Listcontent} >
            
          <DrawerItemList {...props} 
          
          / >
          </View> 
          
  
      </DrawerContentScrollView> 
    

    </View>
  )
}

export default CustoemDrawer

const styles = StyleSheet.create({
    DrawerTitle : {
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
    },
    IconContent : {
        flexDirection:'row',
    },
    Listcontent : {
      backgroundColor:'#fff',
      paddingTop:10,
    }
}) 