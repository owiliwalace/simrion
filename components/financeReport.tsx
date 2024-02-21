import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinanceReport = () => {
  return (
    <>
    <View>
      <Text style={styles.centerAlignment}>
      FinanceReport 
      </Text>
    </View>
    <View style={[styles.report,styles.centerAlignment]} >

    </View>
    </>
  )
}

export default FinanceReport

const styles = StyleSheet.create({
  report:{
    width:'80%',
    height:'50%',
    backgroundColor:"white",
    boxShadow:30,
    elevation:30,
    borderWidth:.5
  },
  centerAlignment:{
    alignSelf:"center"

  }
})
