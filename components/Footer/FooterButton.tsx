import { Pressable, StyleSheet } from "react-native";
import { FooterButtonProps } from "./types";

export default function FooterButton({
  children,
  onPress,
  variant = "primary",
}: FooterButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, styles[variant]]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 75,
    width: "100%",
    borderRadius: 20,
    color: "#262525",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },

  primary: {
    backgroundColor: "#ADD6B7",
  },

  secondary: {
    backgroundColor: "#96D1BD",
  },
});
