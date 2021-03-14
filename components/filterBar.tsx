import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, SafeAreaView, GestureResponderEvent,  } from 'react-native';
import { SearchBar, Header as Head, Icon,Button } from 'react-native-elements';
// import {FiMenu} from 'react-icons/fi'

import Constants from 'expo-constants';
import { filterData } from '../utils';
import { store } from '../store';


export function FilterBar() {

  const [active, setActive] = React.useState('')
 
  const onTap=(event: GestureResponderEvent, type: string)=>{
    event.preventDefault()
    setActive(type)
    // 
  }

  React.useEffect(()=>{
    const data = filterData(active)
    console.log(data)
    store.dispatch({type: 'SET_STATE', state: data})
    
  }, [active])

  return (
    <SafeAreaView style={styles.container}>
    <Text 
      key={4}
      style={
        active == 'Popular' ? 
        styles.activeTitle : 
        styles.buttonTitle
      } 
      onPress={(event)=>onTap(event, 'Popular')}>Popular
      </Text>
    <Text 
    style={
      active == 'Auction' ? 
      styles.activeTitle : 
      styles.buttonTitle
    } 
      onPress={(event)=>onTap(event, 'Auction')}>Auction
   </Text>
    <Text 
    style={
       active == 'Flat-rate' ? 
       styles.activeTitle : 
       styles.buttonTitle
    }
    onPress={(event)=>onTap(event, 'Flat-rate')}
    >Flat-rate</Text>
    <Text 
    style={
      active == 'Scheduled' ? 
      styles.activeTitle : 
      styles.buttonTitle
   }
   onPress={(event)=>onTap(event, 'Scheduled')}
    >Scheduled</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10
    
  },

  button: {
      justifyContent: 'center',
      height: 25,
      margin: 10,
      color: 'yellow',
      backgroundColor: 'yellow'
      
  },
  activeTitle: {
    //   flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: 'black',
    
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'yellow',
    borderRadius: 5
  },

  buttonTitle: {
    //   flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
    fontWeight: 'bold',
    
    
    color: 'grey'
  }
  
  
  
});
