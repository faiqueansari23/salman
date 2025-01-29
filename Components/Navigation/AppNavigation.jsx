import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from './TabNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
       name="TabNavigation"
        component={TabNavigation}
         options={{ headerShown: false }} 
         />
         
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})