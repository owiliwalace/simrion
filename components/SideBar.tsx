import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SideBar = ({}) => {
  return (
    <View style={styles.sideBar}
           
          >
<Text style={styles.sideBarText}>Dashboard</Text>
<Text>Dashboard</Text>
<Text>Dashboard</Text>
<Text>Dashboard</Text>
<Text>Dashboard</Text>
          </View> 
  )
}

export default SideBar

const styles = StyleSheet.create({
  sideBar:{
    width:150,
    height:300,
    backfaceVisibility:"hidden",
    opacity:1,
    backgroundColor:"white",
    zIndex:100,
    marginBottom:-300,
    borderTopEndRadius:10,
    borderBottomEndRadius:10,
    elevation:20,
    boxShadow:"black",
    alignItems:"center",
    transitionDelay:'2',
    animationDuration:'30secs'
  },
  sideBarText:{
    fontSize:22,
    fontWeight:"400"

  }
})