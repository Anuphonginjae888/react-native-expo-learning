import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState("");

  // โหลด username จาก AsyncStorage
  useEffect(() => {
    const loadUsername = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem("username");
        if (savedUsername) setUsername(savedUsername);
      } catch (error) {
        console.error(error);
      }
    };
    loadUsername();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("username");
      await AsyncStorage.removeItem("token");
      navigation.navigate("Login"); // กลับไปหน้า Login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {username || "User"}!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, marginBottom: 20 },
});
