import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
export default function Create({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const addinfo = async () => {
    try {
      await AsyncStorage.setItem("itemlist", username);
    } catch (error) {
      console.log(error);
    }
  };
  const addpass = async () => {
    try {
      await AsyncStorage.setItem("item", password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    addinfo();
    addpass();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          style={styles.Imagestyle}
          source={require("../assets/insta.png")}
        />
        <Text style={{ color: "white", fontSize: 20, marginTop: 15 }}>
          Enter username
        </Text>
        <TextInput
          style={styles.textinput}
          placeholder="username"
          value={username}
          onChangeText={(username) => setusername(username)}
        ></TextInput>

        <Text style={{ color: "white", fontSize: 20, marginTop: 15 }}>
          Enter Password
        </Text>
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          value={password}
          onChangeText={(password) => setpassword(password)}
        ></TextInput>

        <Pressable
          style={styles.textinput2}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.label}>Create a Account</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5F9EA0",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  box1: {
    width: 600,
    height: 600,
    backgroundColor: "#5F9EA0",
  },
  label: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
  textinput: {
    backgroundColor: "#f1f6f8",
    marginTop: 5,
    marginBottom: 10,
    borderColor: "white",
    borderRadius: 6,
    width: 300,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
  },
  textinput2: {
    backgroundColor: "#f1f6f8",
    marginTop: 10,
    marginBottom: 10,
    borderColor: "white",
    borderRadius: 6,
    width: 300,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 60,
  },
  Imagestyle: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 50,
    height: 50,
    marginBottom: 20,
    marginTop: 30,
  },
});
