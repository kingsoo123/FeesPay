import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

const Dashboard = () => {
 
  const [loaded] = useFonts({
    NunitoBlack: require("../assets/fonts/Nunito-Black.ttf"),
  });

  


  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.header}>
        <View style={styles.person}>
          <Ionicons name="person" size={32} color="dodgerblue" />
        </View>

        <View style={styles.PageTitle}>
          <Text style={{ fontFamily: "NunitoBlack", color: "black" }}>Home</Text>
        </View>

        <View style={styles.notification}>
          <Ionicons name="notifications" size={32} color="dodgerblue" />
        </View>
      </View>
      <View style={styles.contentOne}>
        <View style={styles.sub}>
          <Text style={{ fontFamily: "NunitoBlack", color: "black" }}>
            Subcription: <Text style={{ color: "red" }}>Active</Text>
          </Text>
          <Text style={{ fontFamily: "NunitoBlack", color: "black" }}>
            {" "}
            Paid Fees:<Text style={{backgroundColor:'dodgerblue', letterSpacing: 20, color:'white'}}>3</Text>
          </Text>
        </View>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
            width: "30%",
           
          }}
        >
        </View>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 70,
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  person: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  PageTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentOne: {
    width: "100%",
    height: 200,
  },
  sub: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  subTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
