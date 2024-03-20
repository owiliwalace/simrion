       
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useGlobalSearchParams } from 'expo-router'
import Properties from '../../components/properties'
import homes from '../../data.json'

const Search = () => {
    const params = useGlobalSearchParams();
    const router =useRouter();
    
    const [refreshing,setRefreshing]= useState(false);

    const onRefresh = ()=>{}
   
  return (
    <SafeAreaView>
        <Stack.Screen 
        options={{
            title:"property details"
        }}/>
        <ScrollView 
        showsVerticalScrollIndicator={false}
       // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onrefresh}/>}
       >

<Text> </Text>
        </ScrollView>
    
        

    </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({})