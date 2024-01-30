import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer:{
    width:'100%',
    backgroundColor:"white",
    position:'relative'
  }
})