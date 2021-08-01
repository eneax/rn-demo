import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = React.useState(0)
  const [green, setGreen] = React.useState(0)
  const [blue, setBlue] = React.useState(0)

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + COLOR_INCREMENT)}
        onDecrease={() => setRed(red - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />

      <View
        style={{
          width: 400,
          height: 150,
          backgroundColor: `rgb( ${red},${green},${blue} )`,
        }}
      />
      <Text>
        Square color: rgb({red}, {green}, {blue})
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
