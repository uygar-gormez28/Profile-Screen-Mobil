import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";

const ProfileButton = () => {
  // Renkli, dinamik 4 yeni menü seçeneği (Profil Düzenle yerine)
  const buttons = [
    {
      id: 1,
      title: "Siparişlerim",
      icon: "cart-outline",
      color: "#FFA726", // Canlı Turuncu
      bgColor: "rgba(255, 167, 38, 0.15)",
    },
    {
      id: 2,
      title: "Favorilerim",
      icon: "heart-outline",
      color: "#EC407A", // Tatlı Pembe/Kırmızı
      bgColor: "rgba(236, 64, 122, 0.15)",
    },
    {
      id: 3,
      title: "Hesap Ayarları",
      icon: "settings-outline",
      color: "#42A5F5", // Canlı Mavi
      bgColor: "rgba(66, 165, 245, 0.15)",
    },
    {
      id: 4,
      title: "Güvenlik & Gizlilik",
      icon: "shield-checkmark-outline",
      color: "#AB47BC", // Canlı Mor
      bgColor: "rgba(171, 71, 188, 0.15)",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hesap Yönetimi</Text>

      {buttons.map((btn) => (
        <Pressable key={btn.id} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <View style={[styles.iconContainer, { backgroundColor: btn.bgColor }]}>
            <Ionicons name={btn.icon as any} size={24} color={btn.color} />
          </View>

          <Text style={[styles.buttonText, { color: btn.color }]}>{btn.title}</Text>

          <View style={[styles.chevronContainer, { backgroundColor: btn.bgColor }]}>
            <Ionicons name="chevron-forward" size={18} color={btn.color} />
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(20),
    marginTop: vs(15),
    paddingBottom: vs(30),
  },
  sectionTitle: {
    fontSize: s(18),
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: vs(16),
    letterSpacing: 0.5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: vs(14),
    paddingHorizontal: s(16),
    borderRadius: s(18),
    marginBottom: vs(14),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }], // Hafif basma efekti
  },
  iconContainer: {
    width: s(48),
    height: s(48),
    borderRadius: s(24),
    justifyContent: "center",
    alignItems: "center",
    marginRight: s(16),
  },
  buttonText: {
    flex: 1,
    fontSize: s(16),
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  chevronContainer: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    justifyContent: "center",
    alignItems: "center",
  },
});
