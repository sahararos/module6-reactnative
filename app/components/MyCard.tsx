import { StyleSheet, Text, View } from "react-native";

type MyCardProps = {
  title: string;
};

export default function MyCard({ title }: MyCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
