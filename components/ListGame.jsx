import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import React from 'react'

const ListGame = ({item}) => { 

  const { poster , title , subtitle,isFree,price } = item 
  return (
     <View style={{ flexDirection:'row' , alignItems:'center', justifyContent:'space-between'}} >
       <View style={{ flex:1 , alignItems:'center' , flexDirection:'row' ,marginVertical:20 }} >
         <Image source={poster} style={{ width :55 , height:55 , borderRadius:10}} />
       <View style={{ marginHorizontal:20 }} >
         <Text>{title}</Text>
         <Text style={{ textTransform:'uppercase'}} >{subtitle}</Text> 
       </View>
       </View> 
        <TouchableOpacity  style={{
          backgroundColor:'#0aada8',
          width:100,
          borderRadius:10,
          padding:10,
          
        }} >
          <Text style={{ textAlign:'center' , color:'#fff' , fontSize:15,}} > 
           { isFree === 'Yes' && 'play' }
           { isFree === 'No' &&  price }  

          </Text>
        </TouchableOpacity>
     </View> 
  )
}

export default ListGame

const styles = StyleSheet.create({}) 