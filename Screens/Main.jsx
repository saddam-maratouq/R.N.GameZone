import { StyleSheet, Text, View , Image , TouchableOpacity ,Dimensions } from 'react-native'
import React from 'react'
 

//icon
import { FontAwesome5 } from '@expo/vector-icons'; 


const Main = () => {
  return (
      <>

    <View style={{marginTop:50}} >
      <Text style={styles.title} > Game zone </Text>
    </View> 
    <View style={{ flex:1 , justifyContent:'center' ,alignItems:'center' }}  >
    <Image
   source={{uri:'https://imgs.search.brave.com/SSZKfG4l5kq-ErYc3yU2hmxtY_O4YLiJMlXRuSenMXc/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOWMz/YTNjZjYtOWE4OS00/NDFmLTg0MTItNjQz/NTJlNGVkOWEyXzEu/NTkzNGQ2MWU2NDc4/NmI2MjIzM2YyOTFi/NGVhNzNhZDQuanBl/Zw'}}
    style={styles.MainImage}
    resizeMode='stretch'
    /> 
    </View>  
    <TouchableOpacity style={styles.MianButoon} >
        <Text style={styles.text} > Let's  Begin  </Text>
       <FontAwesome5 name="arrow-right" size={24} color="#fff" />

    </TouchableOpacity> 
    </> 
  )
}

export default  Main 

const styles = StyleSheet.create({ 
    title : {
        fontSize:35,
        color:'#555',
        fontWeight:'bold', 
        textAlign:"center", 
    },
    MainImage : {
        width:300,
        height:300,

    }, 
    MianButoon : {
        backgroundColor:'black',
         width : Dimensions.get('screen').width - 10, 
        // padding:15,
        borderRadius:15,
        justifyContent:'space-between',
        alignItems : 'center',
        flexDirection:'row',
        marginBottom:50,
        padding:15,
        
    },
    text : { 
        color:'#fff',
        fontSize : 20,
        fontWeight:'500', 
    },

}) 