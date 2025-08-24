import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (username === "user" && password === "password") {
      try {
        await AsyncStorage.setItem("token", "sampleToken"); // เก็บ token
        Alert.alert("Login Success", "เข้าสู่ระบบเรียบร้อย");
        navigation.navigate("Profile"); // ไปหน้า ProfileScreen
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "ไม่สามารถบันทึกข้อมูลได้");
      }
    } else {
      Alert.alert("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
