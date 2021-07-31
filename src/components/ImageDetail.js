import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
    </View>
  )
}

const styled = StyleSheet.create({})

export default ImageDetail
