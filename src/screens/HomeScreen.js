import React from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => console.log('btn pressed')}
      />
      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green',
  },
})

export default HomeScreen
