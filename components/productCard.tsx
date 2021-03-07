import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
   
const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
const name = 'jkdhfdhfudhfiudhf'

export function ProductCard(
    ) {
    return (
       
        <Card key={1} containerStyle={styles.card}>
        <Image style={styles.logo} source={{ uri: image }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{name}</Text>
        </Card>
    );
  
}


const styles = StyleSheet.create({
    card: {
      alignContent: 'center',
      justifyContent: 'center',    
      // width: 150,
      // height: 150,
      
      margin: 2
    },

    name: {
        
      },


    description: {
        
      },
    
    logo: {
      width: 100,
      height: 100,
      margin: 5
    },
  });
