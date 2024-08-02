import { StyleSheet, ScrollView } from "react-native";
import PlantyChatItem from "./base/PlantyChatItem";
import RoundButton from "../ RoundButton/RoundButton";

export default function Chat() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <PlantyChatItem>
        Hola soy Planty, hazme una foto para ayudarte a encontrar problemas en
        tus plantas.
      </PlantyChatItem>
      <RoundButton
        onPress={() => {
          console.log("test");
        }}
      >
        ¿Me podrías explicar como funciona?
      </RoundButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },

  contentContainerStyle: {
    display: "flex",
    flexDirection: "column",
    rowGap: 32,
  },
});
