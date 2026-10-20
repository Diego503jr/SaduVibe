import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const name = username.trim();

    if (!name || !password.trim()) {
      Alert.alert(
        "Campos obligatorios",
        "Ingresa tu nombre de usuario y contraseña.",
      );
      return;
    }

    navigation.replace("Chat", { username: name });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F1F5FB" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/Logo.jpeg")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>Inicia sesión para chatear</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Nombre de usuario</Text>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="account" size={22} color="#64748B" />
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu usuario"
              placeholderTextColor="#94A3B8"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
          </View>

          <Text style={styles.label}>Contraseña</Text>

          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="lock" size={22} color="#64748B" />
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#94A3B8"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={22}
                color="#64748B"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Entrar</Text>
            <Text style={styles.buttonArrow}>→</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>Tu espacio para conversar</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5FB",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  header: {
    alignItems: "center",
    marginBottom: 28,
  },

  logoContainer: {
    width: 200,
    height: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 10,
    marginBottom: 22,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#1E3A5F",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 18,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#172B4D",
    textAlign: "center",
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
    textAlign: "center",
  },

  card: {
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#E7EDF5",
    elevation: 5,
    shadowColor: "#1E3A5F",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 15,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 9,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCE3ED",
    borderRadius: 13,
    backgroundColor: "#F8FAFD",
    paddingHorizontal: 14,
    marginBottom: 22,
    minHeight: 54,
  },

  inputIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: "#172B4D",
    paddingVertical: 12,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    minHeight: 54,
    borderRadius: 13,
    marginTop: 4,
    elevation: 3,
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 7,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  buttonArrow: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
  },

  footerText: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 22,
  },
});
