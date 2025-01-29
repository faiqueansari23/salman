import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppNavigation from './Components/Navigation/AppNavigation'

const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#004d00",
      justifyContent: "center",
  },
})
export default App