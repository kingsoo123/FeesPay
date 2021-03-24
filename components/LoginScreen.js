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


export default function Login({navigation}) {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>- Sign In -</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={(username) => setUsername({})}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(username) => setPassword({})}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={signin}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.none}>
            <Text style={styles.noAccount}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
              <Text style={styles.signUp}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const signin = () => {
  alert("signed In");
};

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
    backgroundColor: "grey",
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "grey",
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
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#01cb53",
    padding: 16,
    borderRadius: 20,
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
