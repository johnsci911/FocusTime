import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';

export const Focus = () => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            style={styles.button}
            title="+"
            size={50}></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
