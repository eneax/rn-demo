import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #01' },
    { name: 'Friend #02' },
    { name: 'Friend #03' },
    { name: 'Friend #04' },
    { name: 'Friend #05' },
    { name: 'Friend #06' },
    { name: 'Friend #07' },
    { name: 'Friend #08' },
    { name: 'Friend #09' },
    { name: 'Friend #10' },
  ]

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({})

export default ListScreen

/*
! FlatList

- 2 required props: data and renderItem
- data: the array of data that we are going to create a bunch of elements out of
- renderItem: function that will turn each individual item into an element
- keyExtractor: returns a unique string as a key for every element

*/
