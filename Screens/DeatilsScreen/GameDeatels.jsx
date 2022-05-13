import { View, Text } from 'react-native'
import React from 'react'

const GameDeatels = ({route}) => {

  const {title } = route.params
   
  return (
    <View style={{ flex:1 , justifyContent:'center' , alignItems:'center'  }}>
      <Text  style={{ fontSize:30}}>GameDeatels</Text> 
      <Text  style={{ fontSize:25, padding:20}} > {title} </Text>  
    </View>
  )
}

export default GameDeatels  