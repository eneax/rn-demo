import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter