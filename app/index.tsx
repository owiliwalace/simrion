
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import Greetings from '../components/Greetings'
import Footer from '../components/footer'

const index = () => {
  return (
  <>
    <Stack.Screen
    options={{
        title:"Simrion",
        headerLeft: () => (
            <View>
                <Image 
                source={require('../assets/images/favicon.png')}
                resizeMode='cover'
               
                />
            </View>
          ),
          headerRight: () => (
            <View style={styles.profile}>
                <View style={styles.notification}>
     
                    
                </View>
                <View style={styles.image}>
     
                    
                </View>
            </View>
          ),
    }
    }
    />
    <SafeAreaView>
<Greetings />
        <View >
        </View>
    </SafeAreaView>
    <Footer/>
  </>
  )
}

export default index

const styles = StyleSheet.create({
  
  image: {
    borderRadius: 55,
    width: 60,
    height: 60,
    backgroundColor:"black",
    marginLeft:20
  },
    profile:{
      display:'flex',
      flexDirection:"row"
    },
    notification: {
      borderRadius: 5,
      width: 40,
      height: 40,
      backgroundColor:"gray",
      marginLeft:20,
      alignSelf:'baseline'
    },
})