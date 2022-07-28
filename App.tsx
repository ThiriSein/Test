import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './components/booklist';
import AniTiming from './components/aniTiming';
import AniDecay from './components/aniDecay';
import AniSpring from './components/aniSpring';

export default function App() {
  return (
    <View style={styles.container}>

      <BookList />
      <AniTiming />
      <AniDecay />
      <AniSpring />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
  },
});
