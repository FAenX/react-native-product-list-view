import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native'
// import Video from "react-native-video";
import { Product} from '../types'
import {BackgroundVideo} from './backgroundVideo'

   


function TextArea(props: Partial<Product>){
  return(
    <View style={styles.text}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.created}>{props.created}</Text>
        <Text style={styles.cost}>{`$${props.oldPrice} - $${props.newPrice}`}</Text>
      </View>
  )
}




export function ProductCard(
  props: Product) {
    return (
       <View style={styles.product} >
        
        
        <BackgroundVideo {...props}/>
        <TextArea {...props}/>
        
        
       
        </View>
    );
  
}


const styles = StyleSheet.create({

  

    name: {
      textAlign: 'left',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: '#1e242d',
      fontSize: 13,
        
      },


    description: {
      textAlign: 'left',
      fontWeight: '900',
      color: 'grey',
      fontSize: 10,
      // textTransform: '',
        
      },
    
    

    product: {
      // flex: 1,
      justifyContent:'center',
      alignContent:'center',
      textAlign: 'center',
      height: 250,
      width: 170,
      borderRadius: 10,
      backgroundColor: 'white',
      marginBottom: 10
    },
    text: {
      padding: 5
    },
    created:{
      color: 'grey'

    },
    cost: {
      textAlign: 'right',
      fontWeight: 'bold',
      color: 'grey'
    },
    

    top: {
      flex: 1,
      zIndex: 100,
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1, 
    },
    topImage: {
      width: 50,
      height: 50,      
      borderRadius: 50,
      margin: 5

    },
    topText: {
      zIndex: 100,
      flexDirection: 'row',
      
      alignSelf: 'flex-end'
    },
    insetImage: {
      width: 50,
      height: 50,
      borderRadius: 50
    }
    
  });
