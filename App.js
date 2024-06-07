import * as React from 'react'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors.js';
import { Focus } from './src/features/focus.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus></Focus>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
