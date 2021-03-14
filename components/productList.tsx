import React, { useState } from "react";
import { Text, StyleSheet, StatusBar, View , SafeAreaView, ScrollView} from "react-native";
// import { SearchBar} from "react-native-elements";

// import Constants from "expo-constants";
// import {} from "react-native"
import {ProductCard} from "../components"

const products = [
    {
       name: "Automatica women's",
       description: "A very long description about the product sold at this store",
       avatar: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
       created: '3 days ago',
       oldPrice: 10,
       newPrice: 7,
       video: "../assets/video1.mp4"
    },
    {
      name: "Automatica women's",
      description: "A very long description about the product sold at this store",
      avatar: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
      created: '3 days ago',
      oldPrice: 10,
      newPrice: 7,
      video: "../assets/video1.mp4"
     },

     {
      name: "Automatica women's",
      description: "A very long description about the product sold at this store",
      avatar: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
      created: '3 days ago',
      oldPrice: 10,
      newPrice: 7,
      video: "../assets/video1.mp4"
     },

     {
      name: "Automatica women's",
      description: "A very long description about the product sold at this store",
      avatar: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
      created: '3 days ago',
      oldPrice: 10,
      newPrice: 7,
      video: "../assets/video1.mp4"
     },

     {
      name: "Automatica women's",
      description: "A very long description about the product sold at this store",
      avatar: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
      created: '3 days ago',
      oldPrice: 10,
      newPrice: 7,
      video: "../assets/video1.mp4"
     },
     {
      name: "Automatica women's",
      description: "A very long description about the product sold at this store",
      avatar: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
      created: '3 days ago',
      oldPrice: 10,
      newPrice: 7,
      video: "../assets/video1.mp4"
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
            <ProductCard 
               key={i} 
               image={u.avatar} 
               name={u.name} 
               description={u.description}
               oldPrice={u.oldPrice}
               newPrice={u.newPrice}
               created={u.created}

               />
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
      flex: 5,
    },
    scrollView: {
      flex: 1,
     
      },

      productList :{
        
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "space-around",
       
      
      }
  
});


