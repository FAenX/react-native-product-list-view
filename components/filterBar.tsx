import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, SafeAreaView,  } from 'react-native';
import { SearchBar, Header as Head, Icon,Button } from 'react-native-elements';
// import {FiMenu} from 'react-icons/fi'

import Constants from 'expo-constants';

function Title(props: {name: string}){
    return(
        <Text style={styles.buttonTitle}>{props.name}</Text>
    )
}

export function FilterBar() {
  const press=()=>{}

  return (
    <SafeAreaView style={styles.container}>
    {/* <Button 
        title={<Title name={'popular'}/>}
        color="yellow"
        onPress={press}
        containerStyle={styles.button}

    />
    <Button
        title={<Title name={'popular'}/>}
        onPress={press}
        containerStyle={styles.button}
    />
     <Button 
      title={<Title name={'popular'}/>}
      onPress={press}
      containerStyle={styles.button}
    />
    <Button
        title={<Title name={'popular'}/>}
        onPress={press}
        containerStyle={styles.button}
    /> */}
    <Text style={styles.activeTitle}>Popular</Text>
    <Text style={styles.buttonTitle}>Auction</Text>
    <Text style={styles.buttonTitle}>Flat-rate</Text>
    <Text style={styles.buttonTitle}>Scheduled</Text>

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
