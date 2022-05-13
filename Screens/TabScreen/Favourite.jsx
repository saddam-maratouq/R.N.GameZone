import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View  style={styles.flexion}>
      <Text style={styles.Title} >Favourite</Text>
    </View>
  )
}

export default Favourite 

const styles = StyleSheet.create({
    flexion : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    Title : {
        fontSize:30,
    }, 
}) 