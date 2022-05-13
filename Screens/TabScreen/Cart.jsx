import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.flexion} >
      <Text style={styles.Title}>Cart</Text>
    </View>
  )
}

export default Cart

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