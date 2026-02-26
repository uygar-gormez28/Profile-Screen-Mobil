import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const ProfileFavorie = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal
      style={{ flex: 1 }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i: number) => (
        <Image source={{ uri: `https://picsum.photos/200?random=${i}` }} key={i} style={styles.image} />
      ))}
    </ScrollView>
  );
};

export default ProfileFavorie;

const styles = StyleSheet.create({
  image: {
    width: s(100),
    height: s(100),
    borderRadius: s(8),
    margin: s(10),
  },
});
