import React, { useState } from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import { SearchBar} from 'react-native-elements';

import Constants from 'expo-constants';
import {SafeAreaView, ScrollView} from 'react-native'
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
     }
   ]


export function ProductList() {
  

  return (
  
    <ScrollView style={styles.scrollView}>
              
        {
        products.map((u, i) => {
            return (
            <ProductCard key={i}/>
            );
        })
        }
    
    </ScrollView>

  );
}

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // marginHorizontal: 20,
        width: '100%',
        padding: 10,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 5
      },
  
});
