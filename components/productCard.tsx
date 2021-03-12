import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
// import Video from "react-native-video";
import { Video, AVPlaybackStatus } from 'expo-av';

   
type Product = {
  name: string, 
  image: string, 
  description: string,
  oldPrice: number,
  newPrice: number,
  created: string
}

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


function BackgroundVideo(props: Partial<Product>){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return(
    <View key={1} style={styles.card}>
        
        
        <Video
        source={require("../assets/video1.mp4")}
        style={styles.videobg}
        ref={video}
        useNativeControls
        resizeMode="stretch"
        isLooping 
        isMuted       
        // auto?
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        />        
            
        
        <Icon name='visibility' color="white"/>
            <Text style={{marginLeft: 5, color: 'white', zIndex: 100}}>3.9k+ </Text>
        </View>
        
  )
}


export function ProductCard(
  props: Product) {
    return (
       <View style={styles.product} >
        
        
        <BackgroundVideo image={props.image}/>
        <TextArea {...props}/>
        
        
       
        </View>
    );
  
}


const styles = StyleSheet.create({

  card: {
    flex: 1
  },

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
      color: '#5B5F65',
      fontSize: 10,
      // textTransform: '',
        
      },
    
    videobg: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      // borderStyle: 'solid',
      // borderColor: 'black',
      // borderWidth: 1, 
      borderRadius: 5,
      backgroundColor: "black",
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      
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
      color: '#C1D0E4'

    },
    cost: {
      textAlign: 'right',
      fontWeight: 'bold',
      color: '#C1D0E4'
    },
    
  });
