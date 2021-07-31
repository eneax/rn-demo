import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  )
}

const styled = StyleSheet.create({})

export default ImageDetail
