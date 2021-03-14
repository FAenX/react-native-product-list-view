import React from "react";
import {StyleSheet, View , SafeAreaView, ScrollView, Text} from "react-native";
import {connect} from 'react-redux'
import { ProductCard } from ".";
import { Product } from "../types";
import uuid from 'react-native-uuid'




function ProductList(props: any) {
  const s = Object.values(props.products)

 
  
  return (
   <SafeAreaView style={styles.container}>
  
    <ScrollView style={styles.scrollView}>
       <View style={styles.productList}>
       {
        s && s.length > 0 ? s.map((datum: any) => {
          return (
            <>
          <ProductCard 
             key={uuid.v4()} 
             avatar={datum.video} 
             name={datum.name} 
             description={datum.description}
             oldPrice={datum.oldPrice}
             newPrice={datum.newPrice}
             created={datum.created}
             video={datum.video}
             type={datum.type}
      
             />
             </>
          );
      }): <Text>No data ...</Text>
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

const mapStateToProps = (state: { products: any; }) => {
  const { products } = state
  return { products }
};

export default connect(mapStateToProps)(ProductList)




