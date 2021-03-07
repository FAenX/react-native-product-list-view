import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import { SearchBar} from 'react-native-elements';

import Constants from 'expo-constants';

export function Header() {
  

  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <SearchBar
        placeholder="Type Here..."
        // onChangeText={this.updateSearch}
        // value={search}
        containerStyle={styles.searchBar}
      />
      <Text>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 5
    
  },
  searchBar: {
      width: '60%',
      backgroundColor: 'transparent',
      borderWidth: 0
      
  }
  
});
