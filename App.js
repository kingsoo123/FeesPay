import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native";
import Onboarding from "./components/onboarding";
import HomeScreen from "./components/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewOnboarding] = useState(false);


  const checkOnboarding = async () =>{
    try {
      const value = await AsyncStorage.getItem('@viewOnboarding')
      if ( value !== null){
        setViewOnboarding(true)
      }
    } catch (error) {
      console.log('Erro @checkOnboarding: ', error);
    } finally{
      setLoading(false)
    }
  }


  useEffect(()=>{
checkOnboarding()
  }, [])
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : viewedOnboarding ? (
        <HomeScreen />
      ) : (
        <Onboarding />
      )}

      <StatusBar style="auto"/>
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
});
