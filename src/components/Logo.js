import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { colors, radius, shadow } from "../theme";

const logo = require("../../assets/Logo.png");

export default function Logo({ size = 170 }) {
  return (
    <View
      style={[
        styles.card,
        { width: size * 1.4, height: size },
        shadow,
      ]}
    >
      <Image source={logo} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});