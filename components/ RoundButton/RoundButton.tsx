import { Pressable, StyleSheet, Text } from "react-native";
import { RoundButtonProps } from "./types";

export default function RoundButton({ children, ...props }: RoundButtonProps) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: "#f1f1f1",
    padding: 16,
    width: "100%", // ñapa
    textAlign: "center",
  },

  text: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 20,
    color: "#262525",
    textAlign: "center",
  },
});
