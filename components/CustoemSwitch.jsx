import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React , {useState} from 'react'



const CustoemSwitch = ({
    option1,
    option2,
    SelectionMode,
    onselectSwitch 
}) => { 

    //to control color background color by number 
    const [getSelctionMode, setSelectionMode] = useState(SelectionMode)
    
    const  updateSwitchData = (value) => {
        setSelectionMode(value)
        onselectSwitch(value)  // to take value from 1or 2 from this onPress
    }
    



  return (
    <View style={styles.CustomButoon}>
     <TouchableOpacity 
        activeOpacity={1}
        onPress={ () => updateSwitchData(1) }
        style={{ 
            flex:1, 
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            backgroundColor: getSelctionMode == 1 ? '#AD40AF' : '#e4e4e4',
        }}
     
      > 
        <Text 
         style={{
            fontSize: 16, 
            color: getSelctionMode  == 1 ? 'white' : '#AD40AF',
         }} 
        
        > {option1} 
        
        </Text>
     </TouchableOpacity>  


     <TouchableOpacity 
        activeOpacity={1}
        onPress={ () => updateSwitchData(2) }
        style={{ 
            flex:1, 
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            backgroundColor: getSelctionMode == 2 ? '#AD40AF' : '#e4e4e4',

        }}
     
      > 
        <Text 
         style={{
            fontSize: 16, 
            color: getSelctionMode == 2 ? 'white' : '#AD40AF',  
         }} 
        > {option2}   
       
        </Text> 
     </TouchableOpacity> 

   
    </View>
  )
} 

export default CustoemSwitch 

const styles = StyleSheet.create({
    CustomButoon : {
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#e4e4e4',
        borderRadius:10,
        marginTop:20,
        padding:10,
        width:'100%', 
        height:60,
    }
})