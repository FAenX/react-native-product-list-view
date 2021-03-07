import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View , SafeAreaView, ScrollView} from 'react-native';
import { SearchBar} from 'react-native-elements';

import Constants from 'expo-constants';
import {} from 'react-native'
import {ProductCard} from '../components'

const products = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     }, {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     }, {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     }, 
     {
      name: 'brynn',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
       {
         name: 'brynn',
         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      }, 
      {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
       },
     
   ]


export function ProductList() {
  

  return (
   <SafeAreaView style={styles.container}>
  
    <ScrollView style={styles.scrollView}>
       <View style={styles.productList}>
       {
        products.map((u, i) => {
            return (
            <ProductCard key={i}/>
            );
        })
        }

       </View>
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      //   width: '100%',
      //   padding: 10,
      // flex: 2,
      //   flexDirection: 'row',
      //   flexWrap: 'wrap',
      //   borderStyle: 'solid',
      //   borderColor: 'black',
      // //   borderWidth: 1
      },

      productList :{
         // flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'space-around',
       
      //   borderStyle: 'solid',
      //   borderColor: 'black',
      //   borderWidth: 1,
      //   overflow: 'scroll'
      }
  
});


