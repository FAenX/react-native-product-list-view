import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, SafeAreaView, GestureResponderEvent,  } from 'react-native';
import { SearchBar, Header as Head, Icon,Button } from 'react-native-elements';
// import {FiMenu} from 'react-icons/fi'

import Constants from 'expo-constants';

const Title =(props: {name: string})=>{
    return(
        <Text style={styles.buttonTitle}>{props.name}</Text>
    )
}


export function FilterBar() {

  const [active, setActive] = React.useState('')
 
  const onTap=(event: GestureResponderEvent, type: string)=>{
    event.preventDefault()
    setActive(type)
    // 
  }

  return (
    <SafeAreaView style={styles.container}>
    <Text 
      key={4}
      style={
        active == 'popular' ? 
        styles.activeTitle : 
        styles.buttonTitle
      } 
      onPress={(event)=>onTap(event, 'popular')}>Popular
      </Text>
    <Text 
    style={
      active == 'auction' ? 
      styles.activeTitle : 
      styles.buttonTitle
    } 
      onPress={(event)=>onTap(event, 'auction')}>Auction
   </Text>
    <Text 
    style={
       active == 'flat-rate' ? 
       styles.activeTitle : 
       styles.buttonTitle
    }
    onPress={(event)=>onTap(event, 'flat-rate')}
    >Flat-rate</Text>
    <Text 
    style={
      active == 'scheduled' ? 
      styles.activeTitle : 
      styles.buttonTitle
   }
   onPress={(event)=>onTap(event, 'scheduled')}
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
