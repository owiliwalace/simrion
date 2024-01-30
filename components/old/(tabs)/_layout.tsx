import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet, View, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={32} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) =>
          <FontAwesome name="home" size={30} color={color} />,
          headerRight: () => (
            <View
            style={styles.topRight}>
              <Link href="/search" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                  name="search"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                  )}
              </Pressable>
            </Link>
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                  name="bell"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
                </View>
          ),
        }}
      />
        <Tabs.Screen
        name="sell"
        options={{
          title: '',
          tabBarIcon: ({ color }) => 
          <FontAwesome name="book" size={30} color={color} />
,
        }}
      />
      <Tabs.Screen
        name="procure"
        options={{
          title: '',
          tabBarIcon: ({ color }) => 
          <FontAwesome name="plus" size={20} color={color}  />
,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) =>
          <FontAwesome name="list" size={30} color={color}  />
          ,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: '',
          tabBarIcon: ({ color }) => 
          <FontAwesome name="history" size={30} color={color}  />
          ,
        }}
      />
      
    
      
    </Tabs>
  );
}
const styles = StyleSheet.create({
  topRight:{display:"flex",flexDirection:"row"}
})