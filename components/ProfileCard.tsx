import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

type ProfileCardProps = {
  onEdit?: () => void;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ onEdit }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://i.pinimg.com/1200x/d7/f0/a2/d7f0a21b01efadffcdaafe59d1daf584.jpg" }}
      />
      <Text style={styles.name}>Skulduggery Plesant</Text>
      <Text style={styles.desc}>He is a Detective</Text>

      <Pressable style={styles.button} onPress={onEdit}>
        <AntDesign name="edit" size={s(18)} color="white" />
        <Text style={styles.btnText}>Profili Düzenle</Text>
      </Pressable>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#232a43ff",
    padding: s(16),
    alignItems: "center",
  },

  avatar: {
    width: s(100),
    height: s(100),
    borderRadius: s(50),
    marginBottom: s(10),
  },
  name: {
    fontSize: s(20),
    fontWeight: "600",
    color: "white",
  },
  desc: {
    fontSize: s(16),
    color: "white",
    marginVertical: vs(10),
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#585eb3ff",
    borderRadius: s(8),
    padding: s(4),
    gap: s(4),
    marginTop: vs(8),
    width: s(120),
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: s(12),
  },
});
