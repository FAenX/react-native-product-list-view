import React from 'react';
import { View, StyleSheet} from 'react-native'
// import Video from "react-native-video";
import { Video } from 'expo-av';
import { Product} from './types'
import {VideoOverlayText} from './videoOverlayText'



export function BackgroundVideo(props: Partial<Product>){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    
    React.useEffect(()=>{
      video !== null ? video.current.playAsync(): null
    }, [])
  
    return(
      <View key={1} style={styles.card}>
          
          
      <Video
        source={require('../assets/video1.mp4')}
        style={styles.videobg}
        ref={video}
        useNativeControls
        resizeMode="contain"
        isLooping 
        isMuted       
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />    

      <VideoOverlayText/>    
              
      </View>
  
          
    )
  }
  


  const styles = StyleSheet.create({
    card: {
        flex: 1
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
  
      
      
    });
  