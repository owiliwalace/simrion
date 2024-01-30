import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greetings = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour < 16) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <View style={styles.container}>
          <Text style={styles.greetingText}
          
          >{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        justifyContent: 'left',
    alignItems: 'start',
  },
  greetingText: {
    fontSize: 24,
      fontWeight: '600',
      color:'#00000',
  },
});

export default Greetings;