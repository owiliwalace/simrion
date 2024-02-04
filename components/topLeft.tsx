import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const TopLeft = () => {
  return (
    <View style={styles.topLeft}>
       
       <View style={styles.topLeftLine}></View>
       <View style={styles.topLeftLine}></View>
       <View style={styles.topLeftLine}></View>
       
    </View>
  )
}

export default TopLeft

const styles = StyleSheet.create({
    topLeftLine :{
        
        width: 40,
        height: 3,
        backgroundColor:"black"
       
        
      },
      topLeft:{
       //backgroundColor:"green",
       marginLeft:10,
       gap:10,
       paddingTop:15
      }
})