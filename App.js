import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {StyledText, StyledButton} from './components'



export default function App() {
  return (
    <View style={styles.container}>
      <StyledText big>WINE DOWN</StyledText>
      <StyledButton icon="arrowright">
        CHECKOUT
      </StyledButton>
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
