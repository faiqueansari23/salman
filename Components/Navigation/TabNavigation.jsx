import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Setting from '../Screens/Setting';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconComponent;

       
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        // backgroundColor: 'black', // Background color for the bottom navigation bar
        borderTopWidth: 0, // Optional: Removes border at the top of the tab bar
      },
    })}
    >
      <Tab.Screen
       name="Home"
        component={Home} 
        
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // Using Ionicons for the Home icon
            <Ionicons
              name="home" // Icon name
              size={size} // Icon size
              color={color} // Icon color
            />
          ),
        }}
        />
      <Tab.Screen 
      name="Profile"
       component={Profile} 
       
       options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          // Using Ionicons for the Home icon
          <Ionicons
            name="person" // Icon name
            size={size} // Icon size
            color={color} // Icon color
          />
        ),
      }}
       />
      <Tab.Screen
       name="Setting"
        component={Setting}
        
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // Using Ionicons for the Home icon
            <Ionicons
              name="settings" // Icon name
              size={size} // Icon size
              color={color} // Icon color
            />
          ),
        }}
         />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
