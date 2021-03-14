import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomSheet, Icon, Button } from 'react-native-elements';
// import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../screens/home'
import { View, StyleSheet } from 'react-native';


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();


export function MyTabs() {
  return (
    <View style={styles.bottomTabs}>
        <Icon name="check"></Icon>
        <Icon name="arrow-right"></Icon>
        <Icon name="comment"></Icon>
        <Icon name="redo"></Icon>
        
    </View>
  );
}

const styles = StyleSheet.create({
    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 6
    }
})
