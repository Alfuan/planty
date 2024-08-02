import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Inter_700Bold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import Footer from "./components/Footer/Footer";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Header />
        <Chat />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    width: "100%",
    height: "100%",
    paddingLeft: 24,
    paddingRight: 24,
  },

  body: {
    display: "flex",
    gap: 32,
    width: "100%",
    flex: 1,
  },
});
