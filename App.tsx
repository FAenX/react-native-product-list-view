import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native'

import useCachedResources from './hooks/useCachedResources';

import  Home from './screens/home'
import Constants from 'expo-constants';


export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        // width: '100%',
        // height: '100%'
      }}>
        <Home />
        <StatusBar style="dark" />
      </View>
    );
  }
}
