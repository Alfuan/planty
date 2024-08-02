import { PropsWithChildren } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function PlantyChatItem({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./planty.png")}
        width={40}
        height={40}
      />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },

  image: {
    width: 40,
    height: 40,
  },

  text: {
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    lineHeight: 20,
    color: "#262525",
  },
});
