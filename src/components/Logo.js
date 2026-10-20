import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, shadow } from "../theme";

export default function Logo({ size = 84 }) {
  const iconSize = Math.round(size * 0.5);

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.mark,
          { width: size, height: size, borderRadius: size * 0.32 },
          shadow,
        ]}
      >
        <MaterialCommunityIcons
          name="chat-processing"
          size={iconSize}
          color={colors.white}
        />
        <View style={styles.dot} />
      </View>

      <Text style={styles.word}>
        Sadu<Text style={styles.wordAccent}>Vibe</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  mark: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    position: "absolute",
    top: 14,
    right: 14,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.white,
  },
  word: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.5,
    marginTop: 14,
  },
  wordAccent: {
    color: colors.primary,
  },
});