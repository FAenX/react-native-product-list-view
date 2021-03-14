import React from 'react'
import { Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';


export function MyTabs() {
  return (
    <View style={styles.bottomTabs}>
        <Icon name="check" style={styles.iconStyle}></Icon>
        <Icon name="search"></Icon>
        <Icon name="comment"></Icon>
        <Icon name="refresh"></Icon>
        
    </View>
  );
}

const styles = StyleSheet.create({
    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 6
    },
    iconStyle: {
        color: 'purple',
        fontSize: 15
    }
})
