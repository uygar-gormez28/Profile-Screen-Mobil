import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ProfileCardProps {
  onEdit?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ onEdit }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.pinimg.com/1200x/d7/f0/a2/d7f0a21b01efadffcdaafe59d1daf584.jpg" }}
          />
          <View style={styles.statusDot} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Skulduggery Plesant</Text>
          <Text style={styles.desc}>Dedektif & Macera Tutkunu</Text>
        </View>

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={onEdit}>
          <AntDesign name="edit" size={s(16)} color="#ffffff" />
          <Text style={styles.btnText}>Profili Düzenle</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: s(20),
    paddingTop: vs(20),
    paddingBottom: vs(10),
  },
  card: {
    backgroundColor: "#1E1E2C", // Premium Koyu Lacivert/Gri Ton
    borderRadius: s(24),
    paddingVertical: vs(24),
    paddingHorizontal: s(20),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: vs(16),
  },
  avatar: {
    width: s(110),
    height: s(110),
    borderRadius: s(55),
    borderWidth: s(4),
    borderColor: "#ffffff", // Beyaz çerçeve ile fotoğrafı vurgula
  },
  statusDot: {
    position: "absolute",
    bottom: s(6),
    right: s(6),
    width: s(20),
    height: s(20),
    borderRadius: s(10),
    backgroundColor: "#4CD964", // Canlı yeşil durum ışığı
    borderWidth: s(3),
    borderColor: "#1E1E2C",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: vs(16),
  },
  name: {
    fontSize: s(22),
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 0.5,
    marginBottom: vs(4),
  },
  desc: {
    fontSize: s(14),
    color: "#A0A5C0",
    fontWeight: "500",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#4A90E2", // Canlı Mavi
    borderRadius: s(14),
    paddingVertical: vs(10),
    paddingHorizontal: s(24),
    alignItems: "center",
    justifyContent: "center",
    gap: s(8),
    shadowColor: "#4A90E2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },
  btnText: {
    color: "#ffffff",
    fontSize: s(14),
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
