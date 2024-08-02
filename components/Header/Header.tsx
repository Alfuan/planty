import { Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <>
      <Text style={styles.title}>Hola!</Text>
      <Text style={styles.subtitle}>¿Ves algo raro en tu planta?</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 32,
    lineHeight: 28,
    color: "#262525",
    fontWeight: 700,
  },

  subtitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 700,
    color: "#262525",
  },
});
