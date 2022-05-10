import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const SliderImage = ({crouselData}) => {

   
  return (
    <View style={{flex:1 , marginTop:30 }} >
      {/* <Text> {data.title}  </Text>  */}
      <Image source={crouselData.image}  
       style={{ width:300 , height:150 , borderRadius:15}}
       />  
    </View>
  )
}

export default SliderImage 

const styles = StyleSheet.create({})   