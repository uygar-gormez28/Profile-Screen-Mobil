import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard onEdit={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: s(24),
    fontWeight: "bold",
    color: "#333",
  },
});
