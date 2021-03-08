import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
type Product = {
  name: string, 
  image: string, 
  description: string,
  oldPrice: number,
  newPrice: number,
  created: string
}


export function ProductCard(
  props: Product) {
    return (
       <View style={styles.product} >
        <View key={1} style={styles.card}>
        <ImageBackground style={styles.logo} source={{ uri: props.image }} />
        </View>

        <View style={styles.text}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.created}>{props.created}</Text>
        <Text style={styles.cost}>{`$${props.oldPrice} - $${props.newPrice}`}</Text>
        </View>
        </View>
    );
  
}


const styles = StyleSheet.create({
    card: {
      // flex: 1,
      alignContent: 'center',
      justifyContent: 'center',    
      width: 150,
      height: 150,
      // borderStyle: 'solid',
      // borderColor: 'black',
      // borderWidth: 1
      borderRadius: 10
      
      
    
    },

    name: {
      textAlign: 'left',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      // fontColor: 'grey',
      fontSize: 13
        
      },


    description: {
      textAlign: 'left',
      fontWeight: '300',
      color: 'grey',
      fontSize: 10,
      // textTransform: '',
        
      },
    
    logo: {
      
      flex: 1,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10
      
    },

    product: {
      // flex: 1,
      // justifyContent:'center',
      alignContent:'center',
      textAlign: 'center',
      // borderStyle: 'solid',
      // borderColor: 'black',
      // borderWidth: 1,
      height: 250,
      width: 160
    },
    text: {
      padding: 5
    },
    created:{

    },
    cost: {
      textAlign: 'right'
    }
  });
