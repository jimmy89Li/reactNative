import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Rainbows and unicorns!</Text>
        <Button
          style={styles.button}
          onPress={() => { Alert.alert('You got a unicorn!!!') }}
          title="Touch me!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 32
  }
});
