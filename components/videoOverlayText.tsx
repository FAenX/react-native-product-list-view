import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
// import Video from "react-native-video";
import { Product} from '../types'



export function VideoOverlayText(props: Product){
  console.log(props)
    
  
    return(
      
          
      <View style={styles.top}>
        <View style={styles.topText}>
          <Icon name='visibility' color="white"/>
          <Text style={{marginLeft: 5, color: 'white'}}>3.9k+ </Text>
        </View>
  
        <View style={styles.topImage}>
          <Image 
            source={{uri: props.avatar}}
            style={styles.insetImage}
            />
        </View>
         
      </View>

  
          
    )
  }
  


  const styles = StyleSheet.create({
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
  