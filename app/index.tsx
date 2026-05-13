import { StyleSheet, View } from "react-native";
import MyCard from "./components/MyCard";

export default function Index() {
  return (
    <View style={styles.container}>
      <MyCard title="My React Native Component" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});