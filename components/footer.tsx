import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.powered}>© Powered by... </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer:{
    width:'100%',
    backgroundColor:"white",
    position:'relative',
    alignContent:"center"
  },
  powered:{
    alignSelf:"center",
    fontWeight:"600",
    fontSize:20,
  }
})