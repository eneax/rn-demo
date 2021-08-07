import React from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'

const TextScreen = () => {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <ScrollView>
      <Text style={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={styles.text}>My name is {name}</Text>

      <Text style={styles.text}>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? (
        <Text style={styles.errorText}>
          Password must be longer than 5 characters!!!
        </Text>
      ) : null}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    margin: 15,
  },
  errorText: {
    margin: 15,
    color: 'red',
    fontWeight: 'bold',
  },
})

export default TextScreen
