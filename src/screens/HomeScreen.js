import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Components Screen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button title="List Screen" onPress={() => navigation.navigate('List')} />
      <Button
        title="Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
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
