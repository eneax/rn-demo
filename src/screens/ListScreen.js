import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #01', age: 20 },
    { name: 'Friend #02', age: 45 },
    { name: 'Friend #03', age: 32 },
    { name: 'Friend #04', age: 27 },
    { name: 'Friend #05', age: 53 },
    { name: 'Friend #06', age: 30 },
  ]

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      )}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
})

export default ListScreen

/*
! FlatList

- 2 required props: data and renderItem
  - data: the array of data that we are going to create a bunch of elements out of
  - renderItem: function that will turn each individual item into an element

- extra props:
  - keyExtractor: returns a unique string as a key for every element
  - horizontal: if true, renders items next to each other horizontally instead of stacked vertically
  - showsHorizontalScrollIndicator: When true, shows a horizontal scroll

*/
