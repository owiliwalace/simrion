
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import Footer from '../components/footer'
import Hero from '../components/hero'
import { Modal } from 'react-native'
import TopLeft from '../components/topLeft'
import SideBar from '../components/SideBar'

const index = () => {
  const [ sideBar,setSideBar]=useState(true);
  
  
  return (
  <> 
    <Stack.Screen
    
    options={{
       headerTitle:"",
       headerShadowVisible:false ,
        headerLeft: () => (
            <View>
             <View style={styles.profile}>
              <TouchableOpacity //style={styles.profile}
              onPress={()=>setSideBar(false)}>
                <TopLeft/>
                </TouchableOpacity>
                    <TouchableOpacity>
                      <Image       
                      source={require('../assets/images/panther.jpg')}
                      style={styles.topLeftImage}
                      />
                    </TouchableOpacity>
              </View>          
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
     
    <SideBar 
     />
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
    width: 50,
    height: 50,
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
      width: 30,
      height: 30,
      backgroundColor:"gray",
      marginRight:10,
      marginTop:10,
      inline:"block"
    },
    SafeAreaview:{
      height:"100%"
    },
    topLeftImage: {  
      width: 60,
      height: 60,
      
    },

    modalContainer: {
      height: "100%",
      alignSelf: "",
      //verticalAlign: "middle",
      //horizontalAlign: "center",
      marginTop: 0,
      width: "35%",
      borderRadius: 0,
      //alignItems: 'center',
      backgroundColor: 'rgba(200, 200, 230, 1)',
    },
    modalClose:{
      cursor:"default", 
      width:"65%"
    },
    closeText:{
      fontSize:50
    },
    
 

})