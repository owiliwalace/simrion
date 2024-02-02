import { Alert, Pressable, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'
import homes from '../data.json'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { router } from 'expo-router'

const Properties = () => {
  return (
    <View style={styles.propertyShow}>
      <Text>Properties</Text>
      <ScrollView
     showsVerticalScrollIndicator
  
     stickyHeaderHiddenOnScroll
      style={styles.scroll}>

      <SectionList 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      sections={homes}
      renderItem={({item})=>{
        return(
          <View>
                <Pressable style={styles.PressableButton}
      onLongPress={()=>{console.log({item})}}
      onPress={() => {console.log({item}), Alert.alert("long pressed");router.push('/search/${item}')}}
    
      
      >
         <Text>{item}</Text>
         

        </Pressable>
            </View>         
        )
      }}
      />
      </ScrollView>
   
    </View>
  )
}

export default Properties

const styles = StyleSheet.create({
  PressableButton:{
    backgroundColor:"gray",
    height:90,
    marginBottom:1,
    borderRadius:6
  },
  scroll:{width:"90%",
  alignSelf:"center",
  borderWidth:1,
},
propertyShow:{
  width:'50%',
  height:'70%'
}
})