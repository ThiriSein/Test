import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  logo: {
    width: 200,
    height: 110,
  },
  txt: {
    paddingTop: 20,
    paddingLeft: 40,
    fontWeight: 'bold',
    fontSize: 30,
  }
});

const DisplayLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/Nike-Logo.png')}
      />
      <Text style={styles.txt}> Sign In</Text>
      
    </View>
  );
}

export default DisplayLogo;