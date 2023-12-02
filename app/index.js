import { StyleSheet, Text, View } from "react-native";
import {API_URL} from "@env"



export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-gray-500 text-5xl">Rendez-Vous</Text>
      <Text className="text-orange-500 text-lg">A new story starts now... </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 32,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#333"
  },
  subtitle: {
    fontSize: 32,
    color: "#999",
  },
});
