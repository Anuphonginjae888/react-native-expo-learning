import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Go to Count."
        onPress={() => navigation.navigate("Count")}
      />
      <Button
        title="Go to Flex"
        onPress={() => navigation.navigate("FlexScreen")}
      />
      <Button
        title="Go to Style"
        onPress={() => navigation.navigate("StyleScreen")}
      />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
    </View>
  );
}