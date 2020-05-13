import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { vw } from "react-native-expo-viewport-units";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Timeline = ({ navigation }) => (
  <ScreenContainer>
    <Image
      source={{
        uri: "https://source.unsplash.com/user/chrisjoelcampbell",
      }}
      style={{ maxHeight: 320, width: null, flex: 1 }}
    />
  </ScreenContainer>
);
