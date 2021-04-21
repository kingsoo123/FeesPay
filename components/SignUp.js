import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function SignUp({navigation}) {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>- Sign Up -</Text>
          <TextInput
            style={styles.textInput}
            placeholder="First name"
            onChangeText={(username) => setUsername({})}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last name"
            onChangeText={(username) => setPassword({})}
            underlineColorAndroid="transparent"
          />
           <TextInput
            style={styles.textInput}
            placeholder="Phone number"
            onChangeText={(username) => setPassword({})}
            underlineColorAndroid="transparent"
          />
           <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(username) => setPassword({})}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  wrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 90,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold",
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "dodgerblue",
    padding: 11,
    borderRadius: 15,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  forgot: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },

  forgotText: {
    fontSize: 12,
    color: "#fff",
  },
  none: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },

  noAccount: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
  signUp: {
    color: "#fff",
    fontSize: 18,
  },
});
