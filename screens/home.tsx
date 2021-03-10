import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StyleSheet, SafeAreaView} from 'react-native'
import {ProductList, Header, FilterBar} from '../components'






export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
          <Header/>
          <FilterBar />
          <ProductList />
            
        </SafeAreaView>
    );
  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //  alignItems: 'center',
        // width: '100%',
        // height: '100%'
      },
      
      text: {
        fontSize: 20,
      },
      
      
  });
