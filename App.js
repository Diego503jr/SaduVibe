import { React, useState, useEffect } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LoginScreen from "./src/screens/LoginScreen";
import ChatScreen from "./src/screens/ChatScreen";
import { colors } from "./src/theme";
import { getSession, clearSession } from "./src/services/session";

const Stack = createNativeStackNavigator();

function confirmLogout(navigation) {
  Alert.alert("Cerrar sesión", "¿Seguro que quieres salir del chat?", [
    { text: "Cancelar", style: "cancel" },
    {
      text: "Salir",
      style: "destructive",
      onPress: async () => {
        await clearSession();
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      },
    },
  ]);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    getSession()
      .then(setSavedUser)
      .catch(() => setSavedUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={savedUser ? "Chat" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          initialParams={{ username: savedUser }}
          options={({ route, navigation }) => ({
            headerShown: true,
            title: route.params?.username ?? "Chat",
            headerTitleStyle: {
              color: colors.text,
              fontWeight: "700",
              fontSize: 17,
            },
            headerStyle: { backgroundColor: colors.surface },
            headerShadowVisible: false,
            headerBackVisible: false,
            gestureEnabled: false,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => confirmLogout(navigation)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  backgroundColor: "#FEE2E2",
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 999,
                }}
              >
                <MaterialCommunityIcons
                  name="logout"
                  size={16}
                  color={colors.danger}
                />
                <Text style={{ color: colors.danger, fontWeight: "600" }}>
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
