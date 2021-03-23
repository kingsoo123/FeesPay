import React from "react";
import { StyleSheet, View, Text, useWindowDimensions, Image } from "react-native";


const OnboardingItem = ({item})=> {
const {width} = useWindowDimensions()
  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
      <View styles={{flex:0.3}}>
        <Text style={{fontSize: 28, textAlign:'center', fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
      flex: 0.7,
      justifyContent:'center'
  },

    description:{
        fontWeight: '300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64
    }
});


export default OnboardingItem;