// src/screens/ChatScreen.js (PLACEHOLDER: P3 lo reemplaza)
import React from "react";
import { View, Text } from "react-native";

export default function ChatScreen({ route }) {
  const { username } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat de {username}</Text>
    </View>
  );
}
