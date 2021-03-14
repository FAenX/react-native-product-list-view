import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

import useCachedResources from './hooks/useCachedResources';
import {MyTabs} from './components/bottomNavigation'


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './screens/home';
import {store} from './store/index'
import {Provider} from 'react-redux'
import products from './data'




export default function App() {
  const isLoadingComplete = useCachedResources();

  React.useEffect(()=>{
    store.dispatch({type: 'SET_STATE', state: products})
    // console.log(products)
  }, [store.getState().products])
  
  
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
        <Provider store={store}>
        <Home/>

        <MyTabs />
      </Provider>
      
      
      <StatusBar style="dark" /> 
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
