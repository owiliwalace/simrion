
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Stack, router } from 'expo-router'
import Greetings from '../components/Greetings'
import Footer from '../components/footer'
import Properties from '../components/properties'
import Hero from '../components/hero'

const index = () => {
  
  return (
  <> 
    <Stack.Screen
    options={{
       headerTitle:"",
       headerShadowVisible:false ,
        
        headerLeft: () => (
            <View>
                <Image 
                source={require('../assets/images/favicon.png')}
               
                />
            </View>
          ),
          headerRight: () => (
         <View style={styles.profile}>
                <View style={styles.notification}>
             </View>
                <View >
                
                <Image 
                source={require('../assets/images/panther.jpg')}
                style={styles.image}
                />
                </View>
           </View>
          ),
    }
    }
    />
    <SafeAreaView style={styles.SafeAreaview}>
       <Hero />
    </SafeAreaView>
    <Footer/>
  </>

  )
}

export default index

const styles = StyleSheet.create({
  
  image: {
    borderRadius: 55,
    width: 40,
    height: 40,
    borderColor:"gray",
    borderWidth:.3,
    marginRight:20
  },
  profile:{
    display:'flex',
    flexDirection:"row"
  },

    notification: {
      borderRadius: 5,
      width: 20,
      height: 20,
      backgroundColor:"gray",
      marginRight:10,
      marginTop:10,
      inline:"block"
    },
    SafeAreaview:{
      height:"100%"
    }
})