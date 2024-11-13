import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {StyledText} from './components/Texts/StyledText'

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText>DEMO APP</StyledText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
