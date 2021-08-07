// ! With useState
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = React.useState(0)

  return (
    <View>
      <Button
        title="Increase counter"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Decrease counter"
        onPress={() => setCounter(counter - 1)}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen

// ! With useReducer
// import React from 'react'
// import { View, Text, Button, StyleSheet } from 'react-native'

// const reducer = (state, action) => {
//   // state === { count: number }
//   // action === { type: 'increment' || 'decrement', payload: 1 }

//   switch (action.type) {
//     case 'increment':
//       return { ...state, count: state.count + action.payload }
//     case 'decrement':
//       return { ...state, count: state.count - action.payload }
//     default:
//       return
//   }
// }

// const CounterScreen = () => {
//   const [state, dispatch] = React.useReducer(reducer, { count: 0 })

//   return (
//     <View>
//       <Button
//         title="Increase counter"
//         onPress={() => dispatch({ type: 'increment', payload: 1 })}
//       />
//       <Button
//         title="Decrease counter"
//         onPress={() => dispatch({ type: 'decrement', payload: 1 })}
//       />
//       <Text>Current Count: {state.count}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

// export default CounterScreen
