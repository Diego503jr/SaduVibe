import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, radius, shadow } from "../theme";

function formatTime(timestamp) {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessageBubble({ user, text, timestamp, isMine }) {
  return (
    <View style={[styles.row, isMine ? styles.rowMine : styles.rowOther]}>
      <View
        style={[
          styles.bubble,
          isMine ? styles.bubbleMine : styles.bubbleOther,
          !isMine && shadow,
        ]}
      >
        <Text style={[styles.author, isMine && styles.authorMine]}>{user}</Text>
        <Text style={[styles.text, isMine && styles.textMine]}>{text}</Text>
        <Text style={[styles.time, isMine && styles.timeMine]}>
          {formatTime(timestamp)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 14,
    marginVertical: 5,
  },
  rowMine: {
    alignItems: "flex-end",
  },
  rowOther: {
    alignItems: "flex-start",
  },
  bubble: {
    maxWidth: "80%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: radius.lg,
  },
  bubbleMine: {
    backgroundColor: colors.bubbleMine,
    borderBottomRightRadius: 6,
  },
  bubbleOther: {
    backgroundColor: colors.bubbleOther,
    borderBottomLeftRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
  },
  author: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 3,
  },
  authorMine: {
    color: "rgba(255,255,255,0.85)",
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    color: colors.text,
  },
  textMine: {
    color: colors.white,
  },
  time: {
    fontSize: 10,
    color: colors.textLight,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  timeMine: {
    color: "rgba(255,255,255,0.7)",
  },
});