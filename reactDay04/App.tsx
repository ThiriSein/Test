
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import DisplayLogo from './logo';
import ModBot from './ModalBOT';


export default function App() {

    return (
      <View style={styles.container}>
        <DisplayLogo />
        <ModBot />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
