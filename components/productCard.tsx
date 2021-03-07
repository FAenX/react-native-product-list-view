import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Text, View, Image, StyleSheet} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
   
const image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
const name = 'jkdhfdhfudhfiudhf'

export function ProductCard(
    ) {
    return (
       
        <View key={1} style={styles.card}>
        <Image
            style={styles.logo}
        //   resizeMode="cover"
            source={{ uri: image }}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{name}</Text>
        </View>
        
    //   </Card>
    );
  
}


const styles = StyleSheet.create({
    card: {
    //   paddingTop: 50,
      // borderStyle: "solid",
      borderColor: "#000",
      borderStyle: 'solid',
      borderWidth: 5,
      margin: 2
    },

    name: {
        width: 66,
        height: 58,
        // margin: 2
      },


    description: {
        width: 66,
        height: 58,
        // margin: 2
      },
    
    logo: {
      width: 100,
      height: 100,
      margin: 2
    },
  });
