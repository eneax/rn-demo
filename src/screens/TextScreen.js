import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
  const [name, setName] = React.useState('')

  return (
    <View>
      <Text style={styles.text}>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={styles.text}>My name is {name}</Text>
    </View>
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
})

export default TextScreen
