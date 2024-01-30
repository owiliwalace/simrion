//added routes

import { FlatList, SafeAreaView, ScrollView, StyleSheet,RefreshControl, Text, Touchable, TouchableOpacity, View, Pressable } from 'react-native';
import React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Stack, useRouter } from 'expo-router';
import Greetings from '../../components/Greetings';


const liqourTypes = ["Vodka ", "Wine","Gin","Beer","coke","white cup"];

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
export default function TabOneScreen() {

  const router =useRouter();
  
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  
  return (
<ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}>

<SafeAreaView style={styles.container}  >
<Stack.Screen 
options={{
  title:"", headerShadowVisible:false,
  headerLeft: () => (
    <Text style={{ fontFamily:"Console",
    fontWeight:"bold ",fontSize:25}}>
      BarBox
    </Text>
  ),
}}/>

<Greetings />
    <FlatList
  
      style={styles.list} 
      data={liqourTypes}
      renderItem={({ item }) => (
                    <Pressable style={styles.items}
                    
                    onPress={() => router.push('../../items')}
                    >
                      <View>
                            <Text >
                                {item}
                            </Text>
                      </View>                           
                            <View
                            style={styles.category}>
                              <Text>Brand</Text>
                              <Text>ABV%</Text>
                              <Text>Flavour</Text>
                              <Text>Size (ml)</Text>
                              <Text>Quantity</Text>
                              <Text>Price</Text>
                            </View>
                           

                            </Pressable>
                    
                    )}
                    keyExtractor={(item) => `${item}`}
                    
                />
  
    </SafeAreaView>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white",
  },card:{
    width:"100%",
    height:200,
    borderColor:"blue",
    borderWidth:1,
    borderRadius:10,
    paddingLeft:10,
  },list:{
    width:"95%", 
  },items:{
    marginBottom:10,
    borderWidth:0.1, borderRadius:7,minHeight:200,
    paddingLeft:10,shadowOffset:20,
  },
  category:{
    display:'flex',
    flexDirection:"row", gap:8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
