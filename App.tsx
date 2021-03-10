import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

import useCachedResources from './hooks/useCachedResources';

import  Home from './screens/home'
import Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomSheet, Icon, Button } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function MyTabs() {
  return (
    <Tab.Navigator tabBar={props=><Icon name="menu"/>}>
    <Tab.Screen name="home" component={Home} />
    <Tab.Screen name="next" component={Home} />
    <Tab.Screen name="next+" component={Home} />
    {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
  </Tab.Navigator>
  );
}


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        
      
       
        <StatusBar style="dark" /> 
        <MyTabs />
      </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#E5E5E5'
      // width: '100%',
      // height: '100%'
    
    
    },
    
    
});
