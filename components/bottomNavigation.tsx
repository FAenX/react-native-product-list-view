import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomSheet, Icon, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../screens/home'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function MyTabs() {
  return (
    <Tab.Navigator tabBar={props=><Icon name="menu"/>}>
        <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
}
