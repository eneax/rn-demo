import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
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
