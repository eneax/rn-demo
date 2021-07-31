import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ImageDetail = ({ title }) => {
  return (
    <View>
      <Image source={require('../../assets/forest.jpg')} />
      <Text>{title}</Text>
    </View>
  )
}

const styled = StyleSheet.create({})

export default ImageDetail
