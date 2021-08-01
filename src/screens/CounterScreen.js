import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <View>
      <Button
        title="Increase counter"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Decrease counter"
        onPress={() => setCounter(counter - 1)}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
