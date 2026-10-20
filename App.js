import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import ChatScreen from "./src/screens/ChatScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route, navigation }) => ({
            title: `Chat · ${route.params.username}`,
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.replace("Login")}>
                <Text style={{ color: "#d9534f", fontWeight: "600" }}>
                  Salir
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
