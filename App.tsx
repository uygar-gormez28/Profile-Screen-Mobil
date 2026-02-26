import { Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import ProfileCard from "./components/ProfileCard";
import ProfileFavorie from "./components/ProfileFavorie";
import ProfileButton from "./components/ProfileButton";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileCard onEdit={() => {}} />
        <ProfileFavorie />
        <ProfileButton />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FA", // Very light off-white premium feel
  },
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
