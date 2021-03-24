import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native";
import Onboarding from "./components/onboarding";
import Login from "./components/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from "./components/SignUp";
const Stack = createStackNavigator()

export const MainScreen = ({navigation})=>{
  return(
    <View style={styles.container}>
    <Onboarding navigation={navigation}/>
    <StatusBar style="auto"/>
  </View>
  )
}

export default function App() {
   return (

   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown: false,}}>
     <Stack.Screen
     name="Welcome"
     component={MainScreen}
     >
     </Stack.Screen>
     <Stack.Screen
     name='LoginScreen'
     component={Login}>
     </Stack.Screen>
     <Stack.Screen
     name='SignupScreen'
     component={SignUp}>
     </Stack.Screen>
   </Stack.Navigator>
  
 </NavigationContainer>
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
