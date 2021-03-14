import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View, SafeAreaView, GestureResponderEvent } from 'react-native';
import { SearchBar, Header as Head, Icon} from 'react-native-elements';
import {store} from '../store/index'
import {filterData} from '../utils'

import Constants from 'expo-constants';


// console.log(data)

export const Header =()=> {

  const [term, setTerm] = useState('')
  const updateSearch=(ter: string)=>{
    
      // setTerm()
      setTerm(ter)
      // console.log(term)
      
      
  }

  React.useEffect(()=>{
    const data = filterData(term)
    store.dispatch({type: 'SET_STATE', state: data})
    
  }, [term])

  return (
    <SafeAreaView style={styles.container}>
    {/* <View style={styles.container}> */}
      <Icon name="menu" />
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={term}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainerStyle}
        lightTheme={true}
      />
      <Icon name='notifications'></Icon>
    {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 30,
    // paddingRight: 30,
    fontWeight: 'bold'
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 5
    
  },
  searchBarContainer: {
      width: '75%',     
      backgroundColor: 'transparent',     
      marginLeft: 10,
      marginRight: 10,
      margin: 1
      // borderStyle: 'solid',
      // borderColor: 'transparent',
      // borderWidth: 0,
      // border
     
  },
  inputContainerStyle: {
    backgroundColor: 'white',
    //  borderStyle: 'solid',
    //   borderColor: 'black',
    //   borderWidth: 0,
    
  }
  
  
});
