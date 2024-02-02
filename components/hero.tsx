import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Greetings from './Greetings'
import Properties from './properties'

const Hero = () => {
  return (
<View style={[styles.profile]}>
    
      <Greetings />
                    <Properties />
             
   
          
</View>
  )
}

export default Hero

const styles = StyleSheet.create({
  profile:{
    display:'flex',
    flexDirection:"row",
    width:"100%",
    height:"96%",
    backgroundColor:"white",
    marginTop:"1%",
    borderRadius:20,
    borderWidth:1,
  },
})