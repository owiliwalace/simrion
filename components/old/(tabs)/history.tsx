import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const history = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
      options={{
        title:""}}/>

    <View>
      <Text>history</Text>
    </View>
    </SafeAreaView>
  )
}

export default history

const styles = StyleSheet.create({})