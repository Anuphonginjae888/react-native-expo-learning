import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CounterScreen from "../pages/CounterScreen";
import FlexScreen from "../pages/FlexScreen";
import StyleExampleScreen from "../pages/StyleExampleScreen"; 
import LoginScreen from "../pages/LoginScreen"; 

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Count" component={CounterScreen} />
      <Stack.Screen name="FlexScreen" component={FlexScreen} />
      <Stack.Screen name="StyleScreen" component={StyleExampleScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
