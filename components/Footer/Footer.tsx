import { View, StyleSheet, Text, Image } from "react-native";
import FooterButton from "./FooterButton";

export default function Footer() {
  return (
    <View style={styles.container}>
      <FooterButton
        variant="primary"
        onPress={() => console.log("ABRIR FOTOS")}
      >
        <Image source={require("./icons/camera.svg")} />
        <Text style={styles.text}>Toma una nueva foto</Text>
      </FooterButton>
      <FooterButton
        variant="secondary"
        onPress={() => console.log("ABRIR FOTOS")}
      >
        <Image source={require("./icons/gallery.svg")} />
        <Text style={styles.text}>Carga desde tu galería</Text>
      </FooterButton>
      <Text style={[styles.version]}>Planty 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#F1F1F1",
    padding: 16,
    justifyContent: "space-between",
    marginTop: 24,
  },

  text: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    lineHeight: 20,
    color: "#262525",
  },

  version: {
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    lineHeight: 20,
    color: "#adadad",
    textAlign: "center",
  },
});
